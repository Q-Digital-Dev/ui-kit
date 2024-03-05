import React from "react";
import { InputRef } from "../input.options";
import RN from 'react-native';
declare const _default: React.ForwardRefExoticComponent<{
    setClearState(state: boolean): void;
    onChangeText?(text: string): void;
} & Omit<RN.TextInputProps, "value" | "onChangeText"> & React.RefAttributes<InputRef>>;
export default _default;
