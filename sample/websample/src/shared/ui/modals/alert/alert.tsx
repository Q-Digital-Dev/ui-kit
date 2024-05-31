import { useUnit } from 'effector-react'
import React from 'react'
import { alertsEffector, Dialog, P } from './alert.options'
import AlertView from './alert.view'

export default function Alert(p: P) {
  const alerts = useUnit(alertsEffector.store)

  if (!alerts.length) {
    return null
  }
  
  return (
    <div className="fixed w-full h-full top-0 left-0 z-10 items-center justify-center flex">
      {alerts.map((alert, key) => (
        <AlertView
          key={alert.id}
          alert={alert}
          close={Dialog.close}
          active={key === alerts.length - 1}
        />
      ))}
    </div>
  )
}