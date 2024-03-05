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
exports.Input = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var styledComponents_1 = require("../../styledComponents");
var classnames_1 = __importDefault(require("classnames"));
var times_svg_1 = __importDefault(require("./assets/times.svg"));
var input_legacy_1 = __importDefault(require("./ui/input.legacy"));
var input_mask_1 = __importDefault(require("./ui/input.mask"));
var closedEye_svg_1 = __importDefault(require("./assets/closedEye.svg"));
var openedEye_svg_1 = __importDefault(require("./assets/openedEye.svg"));
exports.Input = (0, react_1.forwardRef)(function Input(_a, ref) {
    var label = _a.label, error = _a.error, placeholderTextColor = _a.placeholderTextColor, inputContainerStyle = _a.inputContainerStyle, inputContainerClassName = _a.inputContainerClassName, containerStyle = _a.containerStyle, containerClassName = _a.containerClassName, leftElement = _a.leftElement, rightElement = _a.rightElement, isShowClear = _a.isShowClear, isPassword = _a.isPassword, p = __rest(_a, ["label", "error", "placeholderTextColor", "inputContainerStyle", "inputContainerClassName", "containerStyle", "containerClassName", "leftElement", "rightElement", "isShowClear", "isPassword"]);
    var inputRef = (0, react_1.useRef)(null);
    var _b = (0, react_1.useState)(false), clearState = _b[0], setClearState = _b[1];
    var _c = (0, react_1.useState)(isPassword), isSecureTextEntry = _c[0], setIsSecureTextEntry = _c[1];
    var InputElement = (0, react_1.useMemo)(function () { return ('mask' in p ? input_mask_1.default : input_legacy_1.default); }, [p]);
    (0, react_1.useImperativeHandle)(ref, function () { return inputRef.current; }, [inputRef]);
    return ((0, jsx_runtime_1.jsxs)(styledComponents_1.View, { style: containerStyle, className: containerClassName, children: [label && ((0, jsx_runtime_1.jsx)(styledComponents_1.Text, { className: "text-black font-bold mb-1 text-lg", children: label })), (0, jsx_runtime_1.jsxs)(styledComponents_1.View, { className: (0, classnames_1.default)('w-full flex-row border border-solid border-black/10 rounded-lg px-2', inputContainerClassName, {
                    'border-red-500': error,
                    'pl-0': leftElement,
                    'pr-0': rightElement || (isShowClear && clearState),
                }), style: inputContainerStyle, children: [(0, jsx_runtime_1.jsx)(styledComponents_1.View, { className: "flex-row", children: leftElement }), (0, jsx_runtime_1.jsx)(InputElement, __assign({ className: "h-10 flex-1 p-0 py-0 pb-0 pt-0 text-base leading-5 text-black bg-transparent", placeholderTextColor: placeholderTextColor || '#00000080', ref: inputRef, setClearState: setClearState, secureTextEntry: isSecureTextEntry }, p)), (0, jsx_runtime_1.jsxs)(styledComponents_1.View, { className: "flex-row", children: [clearState && isShowClear && ((0, jsx_runtime_1.jsx)(styledComponents_1.TouchableOpacity, { className: "px-2 py-1 justify-center items-center", onPress: function () {
                                    var _a;
                                    (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.change('');
                                }, children: (0, jsx_runtime_1.jsx)(times_svg_1.default, {}) })), isPassword && ((0, jsx_runtime_1.jsx)(styledComponents_1.TouchableOpacity, { className: "px-2 py-1 justify-center items-center", onPress: function () { return setIsSecureTextEntry(!isSecureTextEntry); }, children: isSecureTextEntry ? (0, jsx_runtime_1.jsx)(closedEye_svg_1.default, {}) : (0, jsx_runtime_1.jsx)(openedEye_svg_1.default, {}) })), rightElement] })] }), error && (0, jsx_runtime_1.jsx)(styledComponents_1.Text, { className: "text-red-500 mt-1 text-sm", children: error })] }));
});
