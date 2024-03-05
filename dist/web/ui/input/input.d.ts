import React from "react";
import { InputRef } from "./input.options";
export declare const Input: React.ForwardRefExoticComponent<{
    label?: string | undefined;
    error?: string | undefined;
    leftElement?: React.ReactNode;
    rightElement?: React.ReactNode;
    containerStyle?: React.CSSProperties | undefined;
    containerClassName?: string | undefined;
    inputContainerStyle?: React.CSSProperties | undefined;
    inputContainerClassName?: string | undefined;
    isShowClear?: boolean | undefined;
} & Omit<({
    mask: string | (string | RegExp)[];
} & {
    setClearState(state: boolean): void;
    onChangeText?(text: string): void;
} & import("react-input-mask").Props) | ({
    mask?: undefined;
} & {
    setClearState(state: boolean): void;
    onChangeText?(text: string): void;
} & React.ClassAttributes<HTMLInputElement> & React.InputHTMLAttributes<HTMLInputElement>), "clearButtonMode" | "setClearState"> & React.RefAttributes<InputRef>>;
export default Input;
