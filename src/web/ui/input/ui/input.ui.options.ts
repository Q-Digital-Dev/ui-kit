import { Props } from "react-input-mask";

type InputUICommonP = {
  setClearState(state: boolean): void
  onChangeText?(text: string): void
}

export type InputLegacyP = InputUICommonP & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
export type InputMaskP = InputUICommonP & Props
