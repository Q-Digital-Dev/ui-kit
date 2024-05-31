import { ButtonP } from "../button.options"

export default function ({
  showPreloader,
  isBlocked,
  colorPreloader = 'white'
}: Pick<ButtonP, 'showPreloader' | 'colorPreloader'> & { isBlocked: boolean }) {
  if (showPreloader && isBlocked) {
    return (
      <div
        className='mr-2'
      >
        <span
          style={{ color: colorPreloader }}
          className="fa fa-circle-o-notch fa-spin"
        />
      </div>
    )
  }

  return null
}