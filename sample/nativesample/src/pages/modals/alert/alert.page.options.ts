import { TransitionPresets } from '@react-navigation/stack'
import AlertPage from './alert.page'
import { NAVIGATION, Route, ScreenProps } from '~app/router'
import ROUTES from '~routes'

export type AlertButton = {
  title: string
  testID?: string
  onPress(close: () => void, onApply?: () => void): void
  className?: string
  textClassName?: string
}

export type AlertConfig = {
  title: string
  subTitle?: string
  buttons: AlertButton[]
  onApply?(): void
  onClose?(): void
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

export type AlertPageP = Route<{
  config: AlertConfig
}> & {}

export type S = {}
export type PView = {
  config: AlertConfig
  close(): void
}

export class Dialog {
  static alert = (
    config: Omit<AlertConfig, 'buttons'>,
    buttons?: AlertConfig['buttons'],
  ) => {
    NAVIGATION.push(ROUTES.modals.alert, {
      config: {
        ...config,
        buttons: buttons ? buttons : [DEFAULT_ALERT_BUTTONS[0]],
      },
    })
  }

  static confirm = (
    config: Omit<AlertConfig, 'buttons'>,
    buttons?: AlertConfig['buttons'],
  ) => {
    NAVIGATION.push(ROUTES.modals.alert, {
      config: { ...config, buttons: buttons ? buttons : DEFAULT_ALERT_BUTTONS },
    })
  }
}

export const RouteSettings: ScreenProps = {
  name: ROUTES.modals.alert,
  component: AlertPage,
  options: {
    headerShown: false,
    presentation: 'transparentModal',
    ...TransitionPresets.ModalFadeTransition,
    gestureEnabled: false,
  },
}

export class DialogPromise {
  static alert = (
    config: Omit<AlertConfig, 'buttons'>,
    applyTitle?: string,
  ) => {
    return new Promise<void>((resolve) => {
      Dialog.confirm({
        ...config,
        onClose() {
          resolve()
          config.onClose?.()
        }
      }, [{
        ...DEFAULT_ALERT_BUTTONS[0],
        title: applyTitle || 'Принять'
      }])
    })
  }

  static confirm = (
    config: Omit<AlertConfig, 'buttons'>,
    applyTitle?: string,
    cancelTitle?: string
  ) => {
    return new Promise((resolve) => {
      Dialog.confirm({
        ...config,
        onApply() {
          resolve(true)
          config.onApply?.()
        },
        onClose() {
          resolve(false)
          config.onClose?.()
        }
      },
        [
          {
            title: applyTitle || 'Да',
            onPress(close, onApply) {
              onApply?.()
              close()
            },
          },
          {
            title: cancelTitle || 'Нет',
            onPress(close) {
              close()
            },
          }
        ]
      )
    })
  }
}

export default RouteSettings
