export enum ButtonTheme {
  BASE,
  BORDERED,
  EMPTY,
}

export type ButtonP = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  buttonTheme?: ButtonTheme
  onClick?(e: React.MouseEvent<HTMLDivElement, MouseEvent>): Promise<void> | void
  throttleTime?: number
  showPreloader?: boolean | 'center' | 'opacity'
  colorPreloader?: string
  title?: string
  titleProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
  titleClassName?: string
  disabled?: boolean
  forceShowPreloader?: boolean
}