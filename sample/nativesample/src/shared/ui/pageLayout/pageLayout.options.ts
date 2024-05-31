import { KeyboardAvoidingViewProps } from "react-native"

export type PageLayoutP = Omit<KeyboardAvoidingViewProps, 'className'> &
{
  layoutClassName?: string
  isSafeAreaDisabled?: boolean
}