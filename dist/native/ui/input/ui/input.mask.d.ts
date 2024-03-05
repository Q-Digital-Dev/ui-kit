import React from "react";
import { InputRef } from "../input.options";
declare const _default: React.ForwardRefExoticComponent<{
    setClearState(state: boolean): void;
    onChangeText?(text: string): void;
} & Omit<import("react-native-mask-input").MaskInputProps, "value" | "onChangeText"> & React.RefAttributes<InputRef>>;
export default _default;
