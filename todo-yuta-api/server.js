const express = require("express");
const app = express();
const routes = require("./api/routes/taskRoutes");
const cors = require('cors');
app.use(cors({
    origin: 'http://34.146.124.165:3001', //アクセス許可するオリジン
    credentials: true, //レスポンスヘッダーにAccess-Control-Allow-Credentials追加
    optionsSuccessStatus: 200 //レスポンスstatusを200に設定

}));
app.use(express.json());
routes(app);

app.listen(3000, () => console.log("Example app listening on port 3000!"));

