"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const index_1 = require("./lib/api/index");
const mysql_1 = require("./lib/core/hooks/mysql");
const bodyParser = require("koa-bodyparser");
const app = new Koa();
(0, mysql_1.default)(app);
function handle404Errors(ctx) {
    console.log(ctx.status);
    if (ctx.status == 404) {
        ctx.body = '<h1 style="text-align: center;"> 404 </h1>';
    }
}
app.use(bodyParser());
app.use(index_1.router.routes());
app.use(handle404Errors);
app.listen(3000);
console.log("open: http://localhost:3000/");
