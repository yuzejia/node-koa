"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql2");
const db_config_1 = require("../config/db-config");
const connection = mysql.createConnection(Object.assign({}, db_config_1.default));
connection.connect((err) => {
    if (err) {
        console.log(err);
    }
});
console.log('mysql 成功--------');
exports.default = connection;
