import * as Koa from "koa";
// import connection from "./db/index"
import { router } from "./core/api/index";
import mysql from "./core/hooks/mysql";
import * as bodyParser from "koa-bodyparser"
const app = new Koa();

mysql(app);

function handle404Errors(ctx) {
  console.log(ctx.status);
  if (ctx.status == 404) {
    ctx.body = '<h1 style="text-align: center;"> 404 </h1>';
  }
}

app.use(bodyParser())
app.use(router.routes());
app.use(handle404Errors);
app.listen(3000);

console.log("open: http://localhost:3000/");
