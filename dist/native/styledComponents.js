"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaskInput = exports.ActivityIndicator = exports.TouchableOpacity = exports.TextInput = exports.Text = exports.View = void 0;
var nativewind_1 = require("nativewind");
var react_native_1 = __importDefault(require("react-native"));
var react_native_mask_input_1 = __importDefault(require("react-native-mask-input"));
exports.View = (0, nativewind_1.styled)(react_native_1.default.View);
exports.Text = (0, nativewind_1.styled)(react_native_1.default.Text);
exports.TextInput = (0, nativewind_1.styled)(react_native_1.default.TextInput);
exports.TouchableOpacity = (0, nativewind_1.styled)(react_native_1.default.TouchableOpacity);
exports.ActivityIndicator = (0, nativewind_1.styled)(react_native_1.default.ActivityIndicator);
exports.MaskInput = (0, nativewind_1.styled)(react_native_mask_input_1.default);
