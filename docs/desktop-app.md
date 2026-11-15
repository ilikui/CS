# CS Study Desktop

CS Study Desktop packages the existing static CS learning workspace in `public/` as a Windows desktop application using Tauri 2.

## Local data

The SQLite file is stored in the operating system's application-data directory, never beside the installed executable. The first schema uses:
- `learning_store(key, value, updated_at)`: compatibility store for existing localStorage-based pages.
- `app_meta(key, value)`: schema and migration metadata.

A Rust document-start script is injected before the existing pages' scripts on every local navigation. It preserves the synchronous localStorage API and mirrors writes/removals into SQLite. At startup, the bootstrap page hydrates localStorage from SQLite before opening the existing `public/index.html`. Learning content remains in the repository and is not copied into the personal database.

## Backup and migration

JSON format identifier: `cs-study-backup`. The backup contains `schema_version`, `created_at`, and all local learning key/value data. Desktop backup and restore are available from the floating **CS 桌面版 · 数据与更新** control. Restore replaces the current local data after confirmation.

To move learning progress from the browser website into the desktop app, first export the browser's localStorage using `/desktop-export.html` on the website, then import that JSON file in the desktop app. This export is read-only and does not delete browser data.

## Releases and updates

- Keep `desktop/src-tauri/tauri.conf.json` and `desktop/src-tauri/Cargo.toml` versions aligned.
- Publish tags as `desktop-vX.Y.Z`, or manually dispatch the release workflow with a version.
- GitHub Actions builds a Windows NSIS installer and a signed updater archive, then attaches them to GitHub Releases and publishes `latest.json`.
- Before the first signed release, generate a Tauri updater key pair with `npm run tauri signer generate` from the `desktop/` directory. Put the private key and password into repository Actions secrets named `TAURI_SIGNING_PRIVATE_KEY` and `TAURI_SIGNING_PRIVATE_KEY_PASSWORD`; replace `REPLACE_WITH_TAURI_UPDATER_PUBLIC_KEY` in `tauri.conf.json` with the matching public key. Do not commit the private key.

## Development

Requirements: Node.js 22, Rust stable, Microsoft C++ Build Tools, and WebView2 Runtime.

```powershell
cd desktop
npm install
npm run dev
npm run build:windows
```

## Release readiness

The source scaffold is committed on a feature branch. A Windows build and real-world migration test are still required before calling the installer production-ready. In particular, verify that every page's localStorage changes are committed to SQLite before closing, test restore against a fresh profile, and test a signed update while confirming that the SQLite file remains unchanged. Add explicit SQLite schema migrations before changing the storage schema.
