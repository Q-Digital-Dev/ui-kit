import { ReactNode } from "react";
import { StyleProp, TextInput, ViewStyle } from "react-native";
import { MaskInputProps } from 'react-native-mask-input';
import { InputLegacyP, InputMaskP } from "./ui/input.ui.options";
export type InputP = {
    label?: string;
    error?: string;
    leftElement?: ReactNode;
    rightElement?: ReactNode;
    containerStyle?: StyleProp<ViewStyle>;
    containerClassName?: string;
    inputContainerStyle?: StyleProp<ViewStyle>;
    inputContainerClassName?: string;
    isShowClear?: boolean;
    isPassword?: boolean;
    value?: string;
} & Omit<(({
    mask: Required<MaskInputProps>['mask'];
} & InputMaskP) | ({
    mask?: undefined;
} & InputLegacyP)), 'clearButtonMode' | 'setClearState'>;
export type InputRef = {
    ref: TextInput | null;
    get(): string;
    change(value: string): void;
};
