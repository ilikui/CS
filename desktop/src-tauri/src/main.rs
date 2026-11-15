use rusqlite::{params, Connection};
use serde::{Deserialize, Serialize};
use std::{collections::HashMap, fs, path::PathBuf};
use tauri::{
    webview::WebviewWindowBuilder,
    AppHandle, Manager, WebviewUrl,
};

const DB_FILE: &str = "cs-study.sqlite3";
const BACKUP_FORMAT: &str = "cs-study-backup";

// Runs before every local page's own scripts. It preserves the synchronous
// localStorage API used throughout the existing static learning pages while
// mirroring each mutation into SQLite asynchronously and in order.
const STORAGE_BRIDGE: &str = r#"
(() => {
  if (!window.__TAURI__?.core?.invoke || window.__CS_SQLITE_BRIDGE__) return;
  window.__CS_SQLITE_BRIDGE__ = true;
  const invoke = window.__TAURI__.core.invoke;
  const proto = Storage.prototype;
  const originalSet = proto.setItem;
  const originalRemove = proto.removeItem;
  const originalClear = proto.clear;
  let queue = Promise.resolve();
  const enqueue = (command, args) => {
    queue = queue.then(() => invoke(command, args)).catch((error) => {
      console.error('[CS Study] SQLite persistence failed:', error);
    });
  };
  proto.setItem = function(key, value) {
    const result = originalSet.call(this, key, value);
    if (this === window.localStorage) enqueue('save_learning_item', { key: String(key), value: String(value) });
    return result;
  };
  proto.removeItem = function(key) {
    const result = originalRemove.call(this, key);
    if (this === window.localStorage) enqueue('remove_learning_item', { key: String(key) });
    return result;
  };
  proto.clear = function() {
    const result = originalClear.call(this);
    if (this === window.localStorage) enqueue('clear_learning_store');
    return result;
  };
  window.addEventListener('pagehide', () => { queue.catch(() => {}); });
})();
"#;

fn database_path(app: &AppHandle) -> Result<PathBuf, String> {
    let dir = app.path().app_data_dir().map_err(|e| e.to_string())?;
    fs::create_dir_all(&dir).map_err(|e| e.to_string())?;
    Ok(dir.join(DB_FILE))
}

fn open_database(app: &AppHandle) -> Result<Connection, String> {
    let path = database_path(app)?;
    let conn = Connection::open(path).map_err(|e| e.to_string())?;
    conn.execute_batch(
        "PRAGMA journal_mode=WAL;
         PRAGMA foreign_keys=ON;
         CREATE TABLE IF NOT EXISTS learning_store (
           key TEXT PRIMARY KEY NOT NULL,
           value TEXT NOT NULL,
           updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
         );
         CREATE TABLE IF NOT EXISTS app_meta (
           key TEXT PRIMARY KEY NOT NULL,
           value TEXT NOT NULL
         );
         INSERT OR IGNORE INTO app_meta(key, value) VALUES ('schema_version', '1');"
    ).map_err(|e| e.to_string())?;
    Ok(conn)
}

#[tauri::command]
fn load_learning_store(app: AppHandle) -> Result<HashMap<String, String>, String> {
    let conn = open_database(&app)?;
    let mut stmt = conn.prepare("SELECT key, value FROM learning_store").map_err(|e| e.to_string())?;
    let rows = stmt.query_map([], |row| Ok((row.get::<_, String>(0)?, row.get::<_, String>(1)?)))
        .map_err(|e| e.to_string())?;
    let mut data = HashMap::new();
    for row in rows {
        let (key, value) = row.map_err(|e| e.to_string())?;
        data.insert(key, value);
    }
    Ok(data)
}

#[tauri::command]
fn save_learning_item(app: AppHandle, key: String, value: String) -> Result<(), String> {
    let conn = open_database(&app)?;
    conn.execute(
        "INSERT INTO learning_store(key, value, updated_at) VALUES (?1, ?2, CURRENT_TIMESTAMP)
         ON CONFLICT(key) DO UPDATE SET value=excluded.value, updated_at=CURRENT_TIMESTAMP",
        params![key, value],
    ).map_err(|e| e.to_string())?;
    Ok(())
}

#[tauri::command]
fn remove_learning_item(app: AppHandle, key: String) -> Result<(), String> {
    let conn = open_database(&app)?;
    conn.execute("DELETE FROM learning_store WHERE key=?1", params![key]).map_err(|e| e.to_string())?;
    Ok(())
}

#[tauri::command]
fn clear_learning_store(app: AppHandle) -> Result<(), String> {
    let conn = open_database(&app)?;
    conn.execute("DELETE FROM learning_store", []).map_err(|e| e.to_string())?;
    Ok(())
}

#[derive(Serialize, Deserialize)]
struct BackupFile {
    format: String,
    schema_version: u32,
    created_at: String,
    data: HashMap<String, String>,
}

#[tauri::command]
fn export_learning_backup(app: AppHandle) -> Result<String, String> {
    let backup = BackupFile {
        format: BACKUP_FORMAT.to_string(),
        schema_version: 1,
        created_at: chrono::Utc::now().to_rfc3339(),
        data: load_learning_store(app)?,
    };
    serde_json::to_string_pretty(&backup).map_err(|e| e.to_string())
}

#[tauri::command]
fn import_learning_backup(app: AppHandle, content: String) -> Result<usize, String> {
    let backup: BackupFile = serde_json::from_str(&content).map_err(|e| format!("备份文件格式无效：{e}"))?;
    if backup.format != BACKUP_FORMAT {
        return Err("不支持的备份文件类型".into());
    }
    if backup.schema_version > 1 {
        return Err("备份来自更新版本的客户端，请先升级客户端".into());
    }
    let mut conn = open_database(&app)?;
    let tx = conn.transaction().map_err(|e| e.to_string())?;
    tx.execute("DELETE FROM learning_store", []).map_err(|e| e.to_string())?;
    {
        let mut stmt = tx.prepare(
            "INSERT INTO learning_store(key, value, updated_at) VALUES (?1, ?2, CURRENT_TIMESTAMP)"
        ).map_err(|e| e.to_string())?;
        for (key, value) in &backup.data {
            stmt.execute(params![key, value]).map_err(|e| e.to_string())?;
        }
    }
    tx.commit().map_err(|e| e.to_string())?;
    Ok(backup.data.len())
}

#[tauri::command]
fn get_desktop_data_path(app: AppHandle) -> Result<String, String> {
    database_path(&app).map(|p| p.to_string_lossy().to_string())
}

fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_updater::Builder::new().build())
        .setup(|app| {
            open_database(&app.handle())?;
            WebviewWindowBuilder::new(
                app,
                "main",
                WebviewUrl::App("desktop-bootstrap.html".into()),
            )
            .title("CS Study · 2028 考研学习工作台")
            .inner_size(1440.0, 920.0)
            .min_inner_size(980.0, 680.0)
            .center()
            .initialization_script(STORAGE_BRIDGE)
            .build()?;
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![
            load_learning_store,
            save_learning_item,
            remove_learning_item,
            clear_learning_store,
            export_learning_backup,
            import_learning_backup,
            get_desktop_data_path
        ])
        .run(tauri::generate_context!())
        .expect("error while running CS Study");
}
