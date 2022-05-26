"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require("mysql2");
var db_config_1 = require("../config/db-config");
var connection = mysql.createConnection(__assign({}, db_config_1.default));
connection.connect(function (err) {
    if (err) {
        console.log(err);
    }
});
console.log('mysql 成功--------');
exports.default = connection;
