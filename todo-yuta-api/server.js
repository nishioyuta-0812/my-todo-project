const express = require("express");
const app = express();
const routes = require("./api/routes/taskRoutes");
app.use(express.json());
routes(app);

app.listen(3000, () => console.log("Example app listening on port 3000!"));

