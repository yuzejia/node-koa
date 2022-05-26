"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_config_1 = require("./db-config");
var index_1 = require("./index");
exports.default = (function (body) {
    return new Promise(function (resolve, reject) {
        var addSql = "INSERT INTO ".concat(db_config_1.USER_INFO, "(Id,name) VALUES(0,?)");
        var addSqlParams = ["".concat(body.name)];
        index_1.default.query(addSql, addSqlParams, function (error, results, fields) {
            if (error) {
                console.log('[INSERT ERROR] - ', error.message);
                return;
            }
            console.log('--------------------------INSERT----------------------------');
            console.log('INSERT ID:', results);
            console.log('-----------------------------------------------------------------\n\n');
            resolve(results);
        });
    });
});
