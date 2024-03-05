import { GestureResponderEvent, TextProps, TouchableOpacityProps } from "react-native";

export enum ButtonTheme {
  BASE,
  BORDERED,
  EMPTY,
}

export type ButtonP = Omit<TouchableOpacityProps, 'onPress'> & {
  buttonTheme?: ButtonTheme
  onPress?: ((e: GestureResponderEvent) => void) | ((e: GestureResponderEvent) => Promise<void>)
  title?: string
  titleProps?: TextProps
  throttleTime?: number
  showPreloader?: boolean | 'center' | 'opacity'
  forceShowPreloader?: boolean
  titleClassName?: string
}
