import { Text, TextProps } from "react-native"
import { ButtonP } from "../button.options"
import classNames from "classnames"

export default function ({
  title,
  titleClassName,
  ...p
}: Pick<ButtonP, 'title' | 'titleClassName'> & TextProps) {
  return (
    <Text
      className={classNames('text-white', titleClassName)}
      {...p}
    >
      {title}
    </Text>
  )
}