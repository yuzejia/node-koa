"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_config_1 = require("./db-config");
const index_1 = require("./index");
exports.default = () => {
    return new Promise((resolve, reject) => {
        index_1.default.query(`SELECT * FROM ${db_config_1.USER_INFO}`, function (error, results, fields) {
            if (error)
                throw error;
            console.log("The solution is: ", results);
            resolve(results);
        });
    });
};
