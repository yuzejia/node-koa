"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var Router = require("koa-router");
var addUserInfo_1 = require("./addUserInfo");
var useInfo_1 = require("./useInfo");
var router = new Router();
exports.router = router;
router
    .get("/home", function (ctx) { return ctx.body = "<h1>YUZEJIA hello </h1>"; })
    .get("/userInfo", useInfo_1.default);
router.post('/addUserInfo', addUserInfo_1.default);
