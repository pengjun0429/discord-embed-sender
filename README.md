# 🌐 Discord Embed 視覺化訊息編輯與發送器

一個基於 **玻璃擬態 (Glassmorphism)** 現代視覺風格的網頁版 Discord 工具。不需透過複雜的後端程式碼或付費伺服器，完全在瀏覽器端（GitHub Pages）運作，「使用者」只需填入 Webhook 網址，即可即時預覽並發送精美的 Embed 訊息至 Discord 頻道。

---

## ✨ 功能特點

* **🔮 玻璃擬態 UI**：採用現代感十足的半透明毛玻璃特效背景，搭配動態漸層氣泡與霓虹燈光邊框效果。
* **⚡ Live Preview（即時預覽）**：左側控制台輸入任何文字、調整顏色，右側虛擬 Discord 訊息框將毫秒級同步更新，真正做到「所見即所得」。
* **🚀 一鍵發送/複製**：支援直接透過 Webhook API 射出訊息，並提供一鍵複製 JSON Payload 功能，方便進階開發者二次利用。
* **🎨 輕量零負擔**：純原生 JavaScript、HTML5、CSS3 開發，免安裝、免載入肥大框架，開啟網頁即刻使用。

---

## 🛠️ 技術棧

* **前端介面**：HTML5 / CSS3 (CSS Filter, Backdrop-blur, Flexbox)
* **核心邏輯**：Vanilla JavaScript (Fetch API, DOM 操作, Event Listener)
* **託管平台**：GitHub Pages

---

## 🚀 使用步驟

1. **取得 Webhook 網址**：
   * 在你的 Discord 伺服器中，進入頻道設定 -> **「整合」** -> **「Webhook」**。
   * 建立一個新的 Webhook 並點擊 **「複製 Webhook URL」**。

2. **配置訊息**：
   * 開啟本專案網頁，將網址貼入控制台的 `Webhook URL` 欄位。
   * 自訂你的機器人名稱、Embed 標題、主要內容（敘述）以及吸睛的側邊條顏色。

3. **發送或匯出**：
   * 檢查右側預覽畫面，確認排版完美無誤。
   * 點擊 **[發送訊息]** 即可在 Discord 頻道中即時看到成果；或點擊 **[複製 Payload]** 取得 JSON 代碼。

---

## 📄 專案授權

本專案採用 **MIT License** 進行開源授權。歡迎自由 Fork、優化或提交 Pull Request！
