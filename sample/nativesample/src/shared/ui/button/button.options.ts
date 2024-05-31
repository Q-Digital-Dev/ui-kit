import { GestureResponderEvent, TextProps, TouchableHighlight, TouchableHighlightProps, TouchableOpacity, TouchableOpacityProps } from "react-native";

export enum ButtonType {
  TOUCHABLE_OPACITY = 'touchableOpacity',
  TOUCHABLE_HIGHLIGHT = 'touchableHighlight',
}

export type ButtonP = Omit<(
  TouchableOpacityProps & { buttonType?: ButtonType.TOUCHABLE_OPACITY }
  |
  TouchableHighlightProps & { buttonType: ButtonType.TOUCHABLE_HIGHLIGHT }
), 'onPress'> & {
  onPress?(e: GestureResponderEvent): Promise<void> | void
  throttleTime?: number
  showPreloader?: boolean
  colorPreloader?: string
  title?: string
  titleProps?: TextProps
  titleClassName?: string
}

export type ButtonRef = {
  button: TouchableHighlight | TouchableOpacity | null
  press(e?: GestureResponderEvent): Promise<void> | void
}