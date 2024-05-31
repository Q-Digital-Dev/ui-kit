import { TransitionPresets } from '@react-navigation/stack'
import { ReactElement } from 'react'
import { Dimensions } from 'react-native'
import BottomSheetPage from './bottomSheet.page'
import { NAVIGATION, Route, ScreenProps } from '~app/router'
import ROUTES from '~routes'

type BottomSheetChildren<T> = (p: T) => ReactElement

export type BottomSheetPageP = Route<{
  config: {}
  children: BottomSheetChildren<{}>
  className?: string
}> & {}

export type S = {}
export type PView = {
  config: BottomSheetPageP['route']['params']['children']
  children: BottomSheetPageP['route']['params']['children']
  close(): void
}

export class BottomSheetManager<T> {
  children: BottomSheetChildren<T>

  constructor(children: BottomSheetChildren<T>, config: T, className?: string) {
    this.children = children
    NAVIGATION.push(ROUTES.modals.bottomSheet, { children, config, className })
  }

  update = (config: T) => {
    NAVIGATION.setParams({ config, children: this.children })
  }
}

export const RouteSettings: ScreenProps<BottomSheetPageP> = {
  name: ROUTES.modals.bottomSheet,
  component: BottomSheetPage,
  options: {
    headerShown: false,
    gestureEnabled: true,
    presentation: 'transparentModal',
    ...TransitionPresets.BottomSheetAndroid,
    gestureResponseDistance: Dimensions.get('window').height,
  },
}

export default RouteSettings
