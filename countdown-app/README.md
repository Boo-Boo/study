# Countdown App

小さなデスクトップウィジェット形式のカウントダウンアプリです。指定日時（デフォルト：2031年11月8日）までの残り時間を右下に表示します。

**主な特徴**
- **シンプル表示**：日・時・分・秒で残り時間を表示します。
- **常に前面表示**：ウィジェットとして常に前面に表示されます。
- **透過・丸角デザイン**：透明背景と丸角でデスクトップに馴染みます。
- **自動起動（設定済）**：アプリ起動時に自動でログイン時に起動する設定を行います（`main.js`参照）。

**ファイル構成（主要ファイル）**
- `main.js`：Electronのメインプロセス。ウィンドウ生成・位置指定・常時最前面・自動起動設定を行います。
- `index.html`：レンダラのHTML。タイマー表示と閉じるボタンを含みます。
- `renderer.js`：レンダラ側のロジック。目標日時との差分を計算して毎秒更新します。
- `styles.css`：UIスタイル（透明背景、ドラッグ領域、グラデーション文字など）。
- `package.json`：依存関係とスクリプト（`start`, `build`）を定義します。

**要件**
- Node.js（推奨：16以上）
- npm
- Electron を開発依存で使用（`package.json`に定義）

**ローカルでの実行（開発向け）**
1. リポジトリのルート（この `README.md` があるフォルダ）に移動します。
```powershell
cd C:\Users\banan\work\countdown-app
```
2. 依存関係をインストールします。
```powershell
npm install
```
3. アプリを起動します。
```powershell
npm start
```

`npm start` は `electron .` を実行して Electron を立ち上げます。

**ビルド（配布用）**
- ビルドコマンド（`electron-builder` を使用）：
```powershell
npm run build
```
- Windows 用ビルドでは追加設定や署名（コードサイニング）が必要になる場合があります。`package.json` の `build` セクションを確認してください。

**設定変更**
- 目標日時は `renderer.js` 内の `targetDate` で設定されています。ローカルで変更可能です。
- UIのスタイルは `styles.css` を編集してください。

**セキュリティに関する注意**
- 現在の `BrowserWindow` 設定は `nodeIntegration: true`、`contextIsolation: false` になっています。開発が簡単になる反面、セキュリティリスクがあります。配布前に `preload.js` を使って `nodeIntegration: false`、`contextIsolation: true` に切り替え、必要なAPIのみ `contextBridge` 経由で公開することを推奨します。

**よくあるトラブルと対処**
- 起動しない／Electronが見つからない：`npm install` を実行して `node_modules` を揃えてから `npm start` を試してください。
- ビルドで失敗する：`electron-builder` のバージョンやプラットフォーム固有の設定を確認してください。

**貢献・開発**
- ブランチ戦略：新しい機能は `feature/*` ブランチで作成し、PR で `master`（またはデフォルトブランチ）へ統合してください。
- 変更を加えたらローカルで動作確認のうえコミット・プッシュしてください。

**ライセンス**
- このリポジトリには `package.json` に記載の通り `ISC` ライセンスが設定されています。必要に応じて作者情報とライセンスを更新してください。

---

必要であれば、`preload.js` を導入してセキュリティ改善を行うパッチや、`README` の英語訳を作成します。コミットとリモートへの push を代行してほしい場合はその旨を教えてください。
