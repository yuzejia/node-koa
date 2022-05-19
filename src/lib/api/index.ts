import * as Router from "koa-router";
import addUserInfo from "./addUserInfo";
import  userInfo from "./useInfo";

const router = new Router();

router
.get("/home", ctx =>  ctx.body = "<h1>YUZEJIA hello </h1>" )
.get("/userInfo", userInfo)


router.post('/addUserInfo', addUserInfo)

export { router };
