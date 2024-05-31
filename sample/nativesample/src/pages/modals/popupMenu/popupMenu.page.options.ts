import { TransitionPresets } from '@react-navigation/stack'
import { Dimensions } from 'react-native'
import { NAVIGATION, Route, ScreenProps } from '~app/router'
import PopupMenuPage from './popupMenu.page'
import ROUTES from '~routes'

type PopupMenuButton = {
  title: string
  onPress?(close: () => void): void
}

type PopupMenuGroup = {
  title?: string
  buttons: PopupMenuButton[]
}

export type PopupMenuConfig = {
  title?: string
  groups: PopupMenuGroup[]
}

export type PopupMenuPageP = Route<{
  config: PopupMenuConfig
}> & {}
export type S = {}
export type PView = {
  config: PopupMenuConfig
  close(): void
}

export function popupMenu(config: PopupMenuConfig) {
  NAVIGATION.push(ROUTES.modals.popupMenu, { config })
}

export const RouteSettings: ScreenProps<PopupMenuPageP> = {
  name: ROUTES.modals.popupMenu,
  component: PopupMenuPage,
  options: {
    headerShown: false,
    presentation: 'transparentModal',
    gestureEnabled: true,
    ...TransitionPresets.BottomSheetAndroid,
    gestureResponseDistance: Dimensions.get('window').height,
  },
}

export default RouteSettings
