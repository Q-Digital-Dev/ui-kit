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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_input_mask_1 = __importDefault(require("react-input-mask"));
var replaceAll_1 = __importDefault(require("../../../../common/utils/replaceAll"));
exports.default = (0, react_1.forwardRef)(function (_a, ref) {
    var onChangeText = _a.onChangeText, onChange = _a.onChange, setClearState = _a.setClearState, _b = _a.alwaysShowMask, alwaysShowMask = _b === void 0 ? true : _b, p = __rest(_a, ["onChangeText", "onChange", "setClearState", "alwaysShowMask"]);
    var inputRef = (0, react_1.useRef)(null);
    var _c = (0, react_1.useState)({
        masked: '',
        unmasked: '',
    }), values = _c[0], setValues = _c[1];
    function onChangeHandler(e) {
        var value = e.target.value;
        onChange === null || onChange === void 0 ? void 0 : onChange(e);
        onChangeTextHandler(value);
    }
    function onChangeTextHandler(masked) {
        var unmasked = (0, replaceAll_1.default)(masked, ['-', '_', '(', ')', ' '], '');
        setClearState(Boolean(unmasked));
        setValues({
            masked: masked,
            unmasked: unmasked,
        });
        onChangeText === null || onChangeText === void 0 ? void 0 : onChangeText(unmasked);
    }
    (0, react_1.useImperativeHandle)(ref, function () { return ({
        ref: inputRef.current,
        get: function () {
            return values.unmasked;
        },
        change: function (value) {
            onChangeTextHandler(value);
        },
    }); }, [inputRef, onChangeText]);
    return ((0, jsx_runtime_1.jsx)(react_input_mask_1.default, __assign({ ref: inputRef, value: values.masked, alwaysShowMask: alwaysShowMask, onChange: onChangeHandler }, p)));
});
