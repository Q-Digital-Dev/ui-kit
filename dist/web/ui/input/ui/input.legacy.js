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
exports.default = (0, react_1.forwardRef)(function (_a, ref) {
    var setClearState = _a.setClearState, onChangeText = _a.onChangeText, onChange = _a.onChange, p = __rest(_a, ["setClearState", "onChangeText", "onChange"]);
    var valueRef = (0, react_1.useRef)('');
    var inputRef = (0, react_1.useRef)(null);
    function onChangeHandler(e) {
        var value = e.target.value;
        onChange === null || onChange === void 0 ? void 0 : onChange(e);
        onChangeTextHandler(value);
    }
    function onChangeTextHandler(value) {
        setClearState(Boolean(value));
        if (inputRef.current) {
            inputRef.current.value = value;
        }
        onChangeText === null || onChangeText === void 0 ? void 0 : onChangeText(value);
        valueRef.current = value;
    }
    (0, react_1.useImperativeHandle)(ref, function () { return ({
        ref: inputRef.current,
        get: function () {
            return valueRef.current;
        },
        change: function (value) {
            onChangeTextHandler(value);
        },
    }); }, [inputRef, onChangeText, valueRef]);
    return ((0, jsx_runtime_1.jsx)("input", __assign({ ref: inputRef, onChange: onChangeHandler }, p)));
});
