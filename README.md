專案結構與功能：

1. 前端 (Frontend):

主要靜態頁面放在 index.html。	
靜態資源（CSS、圖片等）也在 public 資料夾。
可以直接用瀏覽器開啟 index.html，或用 Express 伺服器提供靜態檔案（app.use(express.static(...))）。

2. 後端 (Backend):

使用 Node.js + Express 框架，主程式為 app.js。
路由設定在 routes 資料夾，例如：
card_75.js：處理 /card_75 相關頁面。
card2_75.js：處理 /card2_75 相關頁面。
apiCard2Router.js：API 路由 /api/card2_75。
apiMenuRouter_75.js：API 路由 /api/node_menu_75。
支援 EJS 樣板引擎，動態渲染頁面（views 資料夾）。

3. 資料庫 (Database):

連線設定在 database.js，可切換本地 PostgreSQL 或 Supabase。
你可以用 test-db.js 測試資料庫連線與查詢。

4. API:

提供多個 API 路由，讓前端可以用 AJAX/fetch 取得資料（如 /api/card2_75、/api/node_menu_75）。
這些 API 會從資料庫查詢資料並回傳 JSON 給前端。

5. 其他 (Other):

支援 CORS，方便前後端分開開發。
有多個 demo、作業、midterm 專案資料夾展示不同功能。
參考檔案
app.js：主後端程式。
index.html：主前端頁面。
database.js：資料庫連線。
routes：所有路由與 API。
