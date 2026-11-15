import { invoke } from "@tauri-apps/api/core";
import { check } from "@tauri-apps/plugin-updater";
import { relaunch } from "@tauri-apps/plugin-process";

const status = document.querySelector("#status");
const setStatus = (message) => { status.textContent = message; };

async function boot() {
  try {
    const data = await invoke("load_learning_store");
    for (const [key, value] of Object.entries(data || {})) {
      localStorage.setItem(key, value);
    }
    localStorage.setItem("cs_desktop_runtime", "1");
    localStorage.setItem("cs_desktop_last_boot", new Date().toISOString());

    // Install a small desktop control panel after the existing CS pages load.
    const panel = document.createElement("div");
    panel.id = "cs-desktop-tools";
    panel.innerHTML = `
      <button id="cs-tools-toggle" type="button" title="桌面客户端工具">CS 桌面版 · 数据与更新</button>
      <section id="cs-tools-menu" hidden>
        <strong>CS Study Desktop</strong>
        <small>本地 SQLite · 学习数据独立保存</small>
        <button data-action="backup">导出学习数据备份</button>
        <label class="file-button">从备份恢复<input id="cs-restore-file" type="file" accept=".json,application/json" hidden></label>
        <button data-action="update">检查版本更新</button>
        <button data-action="where">查看数据库位置</button>
        <p id="cs-tools-status" role="status"></p>
      </section>`;
    const style = document.createElement("style");
    style.textContent = `
      #cs-desktop-tools{position:fixed;right:16px;bottom:16px;z-index:2147483000;font:13px/1.5 system-ui,"Microsoft YaHei",sans-serif}
      #cs-tools-toggle{border:1px solid #d8d5cb;border-radius:999px;background:#252720;color:#fff;padding:10px 15px;box-shadow:0 5px 24px #0002;cursor:pointer}
      #cs-tools-menu{position:absolute;right:0;bottom:48px;width:260px;padding:15px;background:#fff;color:#252720;border:1px solid #e5e2d9;border-radius:14px;box-shadow:0 12px 40px #0002}
      #cs-tools-menu[hidden]{display:none}#cs-tools-menu strong,#cs-tools-menu small{display:block}
      #cs-tools-menu small{color:#777a73;margin:3px 0 12px}
      #cs-tools-menu button,.file-button{display:block;width:100%;text-align:left;padding:9px 10px;margin:5px 0;border:1px solid #e9e7e0;border-radius:8px;background:#faf9f6;color:#252720;cursor:pointer}
      #cs-tools-menu button:hover,.file-button:hover{border-color:#c94b3b}
      #cs-tools-status{font-size:11px;color:#557b63;overflow-wrap:anywhere;margin:8px 0 0}
    `;
    document.head.append(style);
    document.body.append(panel);
    const menu = panel.querySelector("#cs-tools-menu");
    const message = panel.querySelector("#cs-tools-status");
    panel.querySelector("#cs-tools-toggle").addEventListener("click", () => { menu.hidden = !menu.hidden; });
    panel.querySelector('[data-action="backup"]').addEventListener("click", async () => {
      try {
        const json = await invoke("export_learning_backup");
        const blob = new Blob([json], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `cs-study-backup-${new Date().toISOString().slice(0,10)}.json`;
        a.click();
        URL.revokeObjectURL(url);
        message.textContent = "备份已生成。建议定期保存到其他磁盘或云盘。";
      } catch (error) { message.textContent = String(error); }
    });
    panel.querySelector("#cs-restore-file").addEventListener("change", async (event) => {
      const file = event.target.files?.[0];
      if (!file) return;
      if (!confirm("恢复备份会替换当前客户端中的学习数据。建议先导出当前备份，确定继续吗？")) return;
      try {
        const count = await invoke("import_learning_backup", { content: await file.text() });
        const data = await invoke("load_learning_store");
        for (const key of Object.keys(localStorage)) localStorage.removeItem(key);
        for (const [key, value] of Object.entries(data || {})) localStorage.setItem(key, value);
        message.textContent = `已恢复 ${count} 项数据，正在刷新页面…`;
        setTimeout(() => location.reload(), 700);
      } catch (error) { message.textContent = `恢复失败：${String(error)}`; }
      event.target.value = "";
    });
    panel.querySelector('[data-action="update"]').addEventListener("click", async () => {
      message.textContent = "正在检查更新…";
      try {
        const update = await check();
        if (!update) { message.textContent = "当前已是最新版本。"; return; }
        if (!confirm(`发现新版本 ${update.version}，现在下载并安装吗？`)) return;
        message.textContent = "正在下载并安装更新…";
        await update.downloadAndInstall();
        await relaunch();
      } catch (error) {
        message.textContent = `更新检查失败：${String(error)}。请前往 GitHub Releases 手动下载。`;
      }
    });
    panel.querySelector('[data-action="where"]').addEventListener("click", async () => {
      try { message.textContent = await invoke("get_desktop_data_path"); }
      catch (error) { message.textContent = String(error); }
    });
    setStatus("学习数据已就绪，正在打开工作台…");
    location.replace("./index.html");
  } catch (error) {
    setStatus(`启动失败：${String(error)}。请检查客户端安装是否完整。`);
  }
}
boot();
