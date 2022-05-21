"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql2");
const db_config_1 = require("../../../config/db-config");
exports.default = (app) => __awaiter(void 0, void 0, void 0, function* () {
    const _mysqlConfig = db_config_1.default;
    try {
        const connection = mysql.createConnection(_mysqlConfig);
        connection.connect();
        console.log('mysql - success --');
        const c = {
            cyan: '\x1b[36m',
            red: '\x1b[31m',
            end: '\x1b[39m'
        };
        app.mysqlConMsg = `mysql connect success. host : ${c.cyan}${db_config_1.default.host}${c.end}`;
        app.use((ctx, next) => {
            ctx.mysql = connection;
            return next();
        });
    }
    catch (error) {
    }
});
