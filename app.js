const Koa = require('koa')


const app = new Koa()

app.use(async ctx => {
    ctx.body = "hello server"
}).listen(3000)

console.log( 'open: http://localhost:3000/');