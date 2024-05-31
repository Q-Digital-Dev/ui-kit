import { createArrayEffector } from "~shared/utils/effector"
import randomKey from "~shared/utils/randomKey"


export type P = {}
export type PView = {
  alert: AlertConfig
  close(id: AlertConfig['id']): void
  active: boolean
}

export type AlertButton = {
  title: string
  testID?: string
  onPress(close: () => void, onApply?: () => void): void
  className?: string
  textClassName?: string
}

export type AlertConfig = {
  id: string
  title: string
  subTitle?: string
  buttons: AlertButton[]
  onApply?(): void
}

export const DEFAULT_ALERT_BUTTONS: AlertButton[] = [
  {
    title: 'Принять',
    onPress: (close, onApply) => {
      close()
      onApply?.()
    },
  },
  {
    title: 'Отмена',
    onPress: close => close(),
    className: 'border-l',
  },
]

export const alertsEffector = createArrayEffector<AlertConfig>(
  'alertsEffector',
  [],
)

export class Dialog {
  static alert = (
    config: Omit<Omit<AlertConfig, 'buttons'>, 'id'>,
    buttons?: AlertConfig['buttons'],
  ): Required<AlertConfig>['id'] => {
    const alert = {
      id: randomKey(10),
      ...config,
      buttons: buttons ? buttons : [DEFAULT_ALERT_BUTTONS[0]],
    }
    alertsEffector.insert(alert)

    return alert.id
  }

  static confirm: typeof Dialog.alert = (config, buttons) => {
    return Dialog.alert(config, buttons ? buttons : DEFAULT_ALERT_BUTTONS)
  }

  static close(id: string) {
    alertsEffector.remove('id', id)
  }
}
