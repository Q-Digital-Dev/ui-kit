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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
exports.Button = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var button_options_1 = require("./button.options");
var preloader_1 = __importDefault(require("./ui/preloader"));
var title_1 = __importDefault(require("./ui/title"));
var classnames_1 = __importDefault(require("classnames"));
var Button = function (_a) {
    var _this = this;
    var _b = _a.buttonTheme, buttonTheme = _b === void 0 ? button_options_1.ButtonTheme.BASE : _b, className = _a.className, onClick = _a.onClick, title = _a.title, children = _a.children, titleProps = _a.titleProps, disabled = _a.disabled, showPreloader = _a.showPreloader, throttleTime = _a.throttleTime, titleClassName = _a.titleClassName, colorPreloader = _a.colorPreloader, forceShowPreloader = _a.forceShowPreloader, p = __rest(_a, ["buttonTheme", "className", "onClick", "title", "children", "titleProps", "disabled", "showPreloader", "throttleTime", "titleClassName", "colorPreloader", "forceShowPreloader"]);
    var _c = (0, react_1.useState)(false), isBlocked = _c[0], setBlocked = _c[1];
    var throttleRef = (0, react_1.useRef)();
    var onClickHandler = (0, react_1.useCallback)(function (e) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (isBlocked || disabled) {
                        return [2 /*return*/];
                    }
                    setBlocked(true);
                    return [4 /*yield*/, (onClick === null || onClick === void 0 ? void 0 : onClick(e))];
                case 1:
                    _a.sent();
                    if (throttleTime) {
                        throttleRef.current = setTimeout(function () {
                            setBlocked(false);
                        }, throttleTime);
                    }
                    else {
                        setBlocked(false);
                    }
                    return [2 /*return*/];
            }
        });
    }); }, [onClick, disabled, isBlocked]);
    (0, react_1.useEffect)(function () {
        return function () {
            clearTimeout(throttleRef.current);
            setBlocked(false);
        };
    }, [throttleRef]);
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: (0, classnames_1.default)('px-5 py-2 rounded-lg flex-row items-center justify-center', className, {
            'bg-red-500 border border-solid border-transparent': buttonTheme === button_options_1.ButtonTheme.BASE,
            'border border-solid border-gray-300': buttonTheme === button_options_1.ButtonTheme.BORDERED,
            'opacity-50': disabled || (showPreloader === 'opacity' && isBlocked) || forceShowPreloader,
        }) }, p, { onClick: onClickHandler, children: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(preloader_1.default, { isBlocked: isBlocked, showPreloader: showPreloader, colorPreloader: colorPreloader }), title ? ((0, jsx_runtime_1.jsx)(title_1.default, __assign({ titleClassName: titleClassName }, titleProps, { title: title }))) : children] }) })));
};
exports.Button = Button;
