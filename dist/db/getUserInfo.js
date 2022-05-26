"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_config_1 = require("./db-config");
var index_1 = require("./index");
exports.default = (function () {
    return new Promise(function (resolve, reject) {
        index_1.default.query("SELECT * FROM ".concat(db_config_1.USER_INFO), function (error, results, fields) {
            if (error)
                throw error;
            console.log("The solution is: ", results);
            resolve(results);
        });
    });
});
