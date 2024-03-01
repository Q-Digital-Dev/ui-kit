"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_native_1 = require("react-native");
var Input = function (_a) {
    var name = _a.name;
    return ((0, jsx_runtime_1.jsxs)(react_native_1.Text, { children: ["native ", name] }));
};
exports.Input = Input;
exports.default = exports.Input;
