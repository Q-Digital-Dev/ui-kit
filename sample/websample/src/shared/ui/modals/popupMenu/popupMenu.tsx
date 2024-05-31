import { useUnit } from 'effector-react'
import React from 'react'
import { popupMenusEffector, P, closePopupMenu } from './popupMenu.options'
import PopupMenuView from './popupMenu.view'

export default function PopupMenu(p: P) {
  const popupMenus = useUnit(popupMenusEffector.store)

  if (!popupMenus.length) {
    return null
  }
  return (
    <div className="fixed w-full h-full top-0 left-0 z-10">
      {popupMenus.map((popupMenu, key) => (
        <PopupMenuView
          key={popupMenu.id}
          config={popupMenu}
          close={() => closePopupMenu(popupMenu.id)}
          active={key === popupMenus.length - 1}
        />
      ))}
    </div>
  )
}
