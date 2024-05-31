import { CSSProperties, ReactNode } from "react";
import { InputLegacyP, InputMaskP } from "./ui/input.ui.options";
import InputMask, { Props } from "react-input-mask";

export type InputP = {
  label?: string
  error?: string
  leftElement?: ReactNode
  rightElement?: ReactNode

  containerStyle?: CSSProperties
  containerClassName?: string
  inputContainerStyle?: CSSProperties
  inputContainerClassName?: string
  isShowClear?: boolean
} & Omit<(({ mask: Props['mask'] } & InputMaskP) | ({ mask?: undefined } & InputLegacyP)), 'clearButtonMode' | 'setClearState'>

export type InputRef = {
  ref: InputMask | HTMLInputElement | null
  get(): string
  change(value: string): void
}
