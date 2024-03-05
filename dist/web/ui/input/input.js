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
var classnames_1 = __importDefault(require("classnames"));
var input_legacy_1 = __importDefault(require("./ui/input.legacy"));
var input_mask_1 = __importDefault(require("./ui/input.mask"));
exports.Input = (0, react_1.forwardRef)(function Input(_a, ref) {
    var label = _a.label, error = _a.error, inputContainerStyle = _a.inputContainerStyle, inputContainerClassName = _a.inputContainerClassName, containerStyle = _a.containerStyle, containerClassName = _a.containerClassName, leftElement = _a.leftElement, rightElement = _a.rightElement, isShowClear = _a.isShowClear, p = __rest(_a, ["label", "error", "inputContainerStyle", "inputContainerClassName", "containerStyle", "containerClassName", "leftElement", "rightElement", "isShowClear"]);
    var inputRef = (0, react_1.useRef)(null);
    var _b = (0, react_1.useState)(false), clearState = _b[0], setClearState = _b[1];
    var InputElement = (0, react_1.useMemo)(function () { return 'mask' in p ? input_mask_1.default : input_legacy_1.default; }, [p]);
    (0, react_1.useImperativeHandle)(ref, function () { return inputRef.current; }, [inputRef]);
    return ((0, jsx_runtime_1.jsxs)("div", { style: containerStyle, className: containerClassName, children: [label && (0, jsx_runtime_1.jsx)("div", { className: "text-black font-bold mb-1 text-lg", children: label }), (0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)("w-full bg-white flex flex-row border border-solid border-black/50 rounded-lg px-2", inputContainerClassName, {
                    'border-red-500': error,
                    'pl-0': leftElement,
                    'pr-0': rightElement || (isShowClear && clearState),
                }), style: inputContainerStyle, children: [(0, jsx_runtime_1.jsx)("div", { className: "flex-row flex", children: leftElement }), (0, jsx_runtime_1.jsx)(InputElement, __assign({ className: 'h-10 flex-1 p-0 py-0 pb-0 pt-0 text-base leading-5 text-black bg-transparent outline-none', ref: inputRef, setClearState: setClearState }, p)), (0, jsx_runtime_1.jsxs)("div", { className: "flex-row flex", children: [clearState && isShowClear && ((0, jsx_runtime_1.jsx)("div", { className: 'px-2 py-1 justify-center items-center flex', onClick: function () {
                                    var _a;
                                    (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.change('');
                                }, children: (0, jsx_runtime_1.jsxs)("svg", { width: "17", height: "17", viewBox: "0 0 17 17", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [(0, jsx_runtime_1.jsx)("path", { d: "M8.5 16.5C12.9183 16.5 16.5 12.9183 16.5 8.5C16.5 4.08172 12.9183 0.5 8.5 0.5C4.08172 0.5 0.5 4.08172 0.5 8.5C0.5 12.9183 4.08172 16.5 8.5 16.5Z", stroke: "black", "stroke-linecap": "round", "stroke-linejoin": "round" }), (0, jsx_runtime_1.jsx)("path", { d: "M5.5 5.5L11.5 11.5M11.5 5.5L5.5 11.5", stroke: "black", "stroke-linecap": "round", "stroke-linejoin": "round" })] }) })), rightElement] })] }), error && (0, jsx_runtime_1.jsx)("div", { className: "text-red-500 mt-1 text-sm", children: error })] }));
});
