import { createArrayEffector } from '~shared/utils/effector'
import randomKey from '~shared/utils/randomKey'
import sleep from '~shared/utils/sleep'

export type P = {}
export type PView = {
  config: PopupMenuConfig
  close(): void
  active: boolean
}

export const popupMenusEffector = createArrayEffector<PopupMenuConfig>(
  'popupMenuEffector',
  [],
)

type PopupMenuButton = {
  title: string
  onPress?(close: () => void): void
}

type PopupMenuGroup = {
  title?: string
  buttons: PopupMenuButton[]
}

export type PopupMenuConfig = {
  id: string
  title?: string
  groups: PopupMenuGroup[]
}

export async function popupMenu(config: Omit<PopupMenuConfig, 'id'>) {
  const id = randomKey(10)
  popupMenusEffector.insert({ id, ...config })

  await sleep(500)
  return id
}

export function closePopupMenu(id: string) {
  popupMenusEffector.remove('id', id)
}
