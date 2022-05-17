import Koa from 'koa'
// import connection from "./db/index"
import {router} from "./router/index"
const app = new Koa()

app.use(router.routes())
app.listen(3000)

console.log( 'open: http://localhost:3000/');