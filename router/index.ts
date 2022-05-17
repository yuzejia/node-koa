import * as Router from "koa-router";

console.log(Router);

const router  = new Router()

router.get('/', (ctx) => { // 首页
    console.log('首页');
    ctx.body = '<h1>Home Page</h1>'
})

router.get('/home', (ctx) => { // 首页
    console.log('首页');
    ctx.body = '<h1>Home Page 111111111</h1>'
})



router.get('/user', (ctx) => {
    console.log('userInfo --- 请求');
    // 请求数据库

    ctx.body =  '<h1>${results}</h1>' 
})



export {
    router,
}