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
exports.Form = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var formik_1 = require("formik");
var classnames_1 = __importDefault(require("classnames"));
var lodash_1 = __importDefault(require("lodash"));
var input_1 = require("../input/input");
var button_1 = require("../button/button");
var Form = function Form(_a) {
    var children = _a.children, inputs = _a.inputs, initialValues = _a.initialValues, submitProps = _a.submitProps, p = __rest(_a, ["children", "inputs", "initialValues", "submitProps"]);
    return ((0, jsx_runtime_1.jsx)(formik_1.Formik, __assign({}, p, { initialValues: initialValues, children: function (settings) { return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [inputs === null || inputs === void 0 ? void 0 : inputs.map(function (_a) {
                    var name = _a.name, onChangeText = _a.onChangeText, inputProps = __rest(_a, ["name", "onChangeText"]);
                    return ((0, react_1.createElement)(input_1.Input, __assign({}, inputProps, { key: name.toString(), onChangeText: function (val) {
                            settings.handleChange(name)(val);
                            onChangeText === null || onChangeText === void 0 ? void 0 : onChangeText(val);
                        }, error: settings.errors[name], onBlur: settings.handleBlur(name), value: settings.values[name], className: (0, classnames_1.default)(inputProps.className), containerClassName: (0, classnames_1.default)('mt-2', inputProps.containerClassName) })));
                }), !!submitProps && ((0, jsx_runtime_1.jsx)(button_1.Button, __assign({}, submitProps, { onPress: function () { return settings.handleSubmit(); }, className: (0, classnames_1.default)(submitProps.className), disabled: !Boolean(lodash_1.default.values(settings.touched).length) || Boolean(lodash_1.default.values(settings.errors).length), forceShowPreloader: settings.isSubmitting }))), children && typeof children === 'function' ? children(settings) : children] })); } })));
};
exports.Form = Form;
