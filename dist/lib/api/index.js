"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const Router = require("koa-router");
const addUserInfo_1 = require("./addUserInfo");
const useInfo_1 = require("./useInfo");
const router = new Router();
exports.router = router;
router
    .get("/home", ctx => ctx.body = "<h1>YUZEJIA hello </h1>")
    .get("/userInfo", useInfo_1.default);
router.post('/addUserInfo', addUserInfo_1.default);
