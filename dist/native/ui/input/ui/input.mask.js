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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var styledComponents_1 = require("../../../styledComponents");
var react_native_mask_input_1 = require("react-native-mask-input");
exports.default = (0, react_1.forwardRef)(function (_a, ref) {
    var onChangeText = _a.onChangeText, setClearState = _a.setClearState, p = __rest(_a, ["onChangeText", "setClearState"]);
    var inputRef = (0, react_1.useRef)(null);
    var _b = (0, react_1.useState)((0, react_native_mask_input_1.formatWithMask)({ mask: p.mask, text: p.defaultValue })), values = _b[0], setValues = _b[1];
    function onChangeTextHandler(masked, unmasked, obfuscated) {
        setClearState(Boolean(unmasked));
        setValues({ masked: masked, unmasked: unmasked, obfuscated: obfuscated });
        onChangeText === null || onChangeText === void 0 ? void 0 : onChangeText(unmasked);
    }
    (0, react_1.useImperativeHandle)(ref, function () { return ({
        ref: inputRef.current,
        get: function () {
            return values.unmasked;
        },
        change: function (value) {
            onChangeTextHandler(value, value, value);
        },
    }); }, [inputRef, onChangeText]);
    return ((0, jsx_runtime_1.jsx)(styledComponents_1.MaskInput, __assign({ ref: inputRef, value: values.masked, onChangeText: onChangeTextHandler }, p)));
});
