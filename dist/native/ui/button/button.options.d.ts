import { GestureResponderEvent, TextProps, TouchableOpacityProps } from "react-native";
export declare enum ButtonTheme {
    BASE = 0,
    BORDERED = 1,
    EMPTY = 2
}
export type ButtonP = Omit<TouchableOpacityProps, 'onPress'> & {
    buttonTheme?: ButtonTheme;
    onPress?: ((e: GestureResponderEvent) => void) | ((e: GestureResponderEvent) => Promise<void>);
    title?: string;
    titleProps?: TextProps;
    throttleTime?: number;
    showPreloader?: boolean | 'center' | 'opacity';
    forceShowPreloader?: boolean;
    titleClassName?: string;
};
