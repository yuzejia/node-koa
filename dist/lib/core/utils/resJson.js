"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultJson = void 0;
exports.ResultJson = {
    success: function (params) {
        return {
            data: params.data || null,
            msg: params.msg || '操做成功',
            code: 1
        };
    },
    fail: function (params) {
        return {
            data: params.data || null,
            msg: params.msg || '操做失败',
            code: 0,
            error_code: params.errorCode
        };
    }
};
