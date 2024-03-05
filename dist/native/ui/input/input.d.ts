import React from 'react';
import { InputRef } from './input.options';
declare const _default: React.ForwardRefExoticComponent<{
    label?: string | undefined;
    error?: string | undefined;
    leftElement?: React.ReactNode;
    rightElement?: React.ReactNode;
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    containerClassName?: string | undefined;
    inputContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    inputContainerClassName?: string | undefined;
    isShowClear?: boolean | undefined;
    isPassword?: boolean | undefined;
    value?: string | undefined;
} & Omit<({
    mask: import("react-native-mask-input").Mask;
} & {
    setClearState(state: boolean): void;
    onChangeText?(text: string): void;
} & Omit<import("react-native-mask-input").MaskInputProps, "value" | "onChangeText">) | ({
    mask?: undefined;
} & {
    setClearState(state: boolean): void;
    onChangeText?(text: string): void;
} & Omit<import("react-native").TextInputProps, "value" | "onChangeText">), "clearButtonMode" | "setClearState"> & React.RefAttributes<InputRef>>;
export default _default;
