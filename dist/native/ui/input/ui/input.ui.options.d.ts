import { TextInputProps } from "react-native";
import { MaskInputProps } from "react-native-mask-input";
type InputUICommonP = {
    setClearState(state: boolean): void;
    onChangeText?(text: string): void;
};
export type InputLegacyP = InputUICommonP & Omit<TextInputProps, 'value' | 'onChangeText'>;
export type InputMaskP = InputUICommonP & Omit<MaskInputProps, 'value' | 'onChangeText'>;
export {};
