"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cn = void 0;
var cn = function () {
    var classNames = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classNames[_i] = arguments[_i];
    }
    return classNames.filter(function (cn) { return !!cn; }).join(' ');
};
exports.cn = cn;
