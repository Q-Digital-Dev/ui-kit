"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
function default_1(_a) {
    var showPreloader = _a.showPreloader, isBlocked = _a.isBlocked, _b = _a.colorPreloader, colorPreloader = _b === void 0 ? 'white' : _b;
    if (showPreloader && isBlocked) {
        return ((0, jsx_runtime_1.jsx)("div", { className: 'mr-2', children: (0, jsx_runtime_1.jsx)("span", { style: { color: colorPreloader }, className: "fa fa-circle-o-notch fa-spin" }) }));
    }
    return null;
}
exports.default = default_1;
