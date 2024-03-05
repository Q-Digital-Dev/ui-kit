import { ButtonP } from "../button.options"
import classNames from "classnames"

export default function ({
  title,
  titleClassName,
  ...p
}: Pick<ButtonP, 'title' | 'titleClassName'> & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  return (
    <div
      className={classNames('text-white', titleClassName)}
      {...p}
    >
      {title}
    </div>
  )
}