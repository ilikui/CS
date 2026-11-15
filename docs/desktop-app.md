# CS Study Desktop

CS Study Desktop packages the existing static CS learning workspace in `public/` as a Windows desktop application using Tauri 2.

## Product goals

- Keep the current web learning content and page routes; do not fork or rewrite the course material.
- Store learner state in a local SQLite database under the operating system's application-data directory, never beside the installed executable.
- Keep learning content (Markdown, question banks, vocabulary, images) separate from personal learning state.
- Support explicit JSON backup/restore and signed application updates.
- Preserve the browser-based website as an independent way to access the learning content.

## Local data

Database file: `cs-study.sqlite3`

Initial table:
- `learning_store(key, value, updated_at)`: compatibility key/value store for existing page state.
- `app_meta(key, value)`: schema version and future migration metadata.

The desktop bootstrap hydrates the WebView's localStorage from SQLite before opening the existing `public/index.html`. The Rust commands expose transactional SQLite reads/writes and JSON backup/restore. The WebView storage bridge must be injected before page scripts on every local navigation; it mirrors localStorage mutations into SQLite while retaining synchronous browser storage semantics for the existing pages.

## Backup format

JSON format identifier: `cs-study-backup`

The backup contains `schema_version`, `created_at`, and the complete key/value learning state. Restoring a backup replaces the current learning state, so the UI asks for confirmation first. Keep backups outside the installation directory.

## Versioning and release

- Update `desktop/src-tauri/tauri.conf.json` and `desktop/src-tauri/Cargo.toml` together for each release.
- Tag releases as `desktop-vX.Y.Z`, or dispatch the workflow with a version.
- GitHub Actions builds a Windows NSIS installer and attaches it to GitHub Releases.
- Tauri updater artifacts must be signed. Generate a key pair with `npm run tauri signer generate`; store the private key and password as GitHub Actions secrets `TAURI_SIGNING_PRIVATE_KEY` and `TAURI_SIGNING_PRIVATE_KEY_PASSWORD`, and put the matching public key in `tauri.conf.json`.
- The workflow publishes `latest.json` for the Tauri updater when signing secrets are configured.

## Development

Requirements: Node.js 22, Rust stable, Microsoft C++ Build Tools, and WebView2 Runtime.

```powershell
cd desktop
npm install
npm run dev
npm run build:windows
```

## Current implementation boundary

The compatibility database layer and bootstrap are the foundation. Before calling a release production-ready, finish and test the document-start localStorage bridge on every page navigation, validate import/export against the website's existing browser data, add schema migrations, and test update/rollback with a signed release. Do not delete browser-side data during migration.
