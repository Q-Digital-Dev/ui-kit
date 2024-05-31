import {
  RouteProp,
  ParamListBase,
  EventConsumer,
  EventMapBase,
  NavigationHelpers,
  NavigationProp
} from '@react-navigation/native'
import {
  CardStyleInterpolators,
  StackNavigationOptions,
} from '@react-navigation/stack'
import { ReactNode } from 'react'

export const NAVIGATOR_SETTINGS:
  | StackNavigationOptions
  | ((props: {
    route: RouteProp<ParamListBase, string>
    navigation: NavigationProp<ReactNavigation.RootParamList>
  }) => StackNavigationOptions) = {
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  headerShown: false,
  gestureDirection: 'horizontal',
  cardShadowEnabled: true,
  cardOverlayEnabled: true,
  gestureEnabled: false,
  detachPreviousScreen: false,
}

export type PScreen = {
  navigation: NavigationHelpers<{}> & EventConsumer<EventMapBase>
  route: RouteProp<ParamListBase, string>
}

export type Route<ParamList = Record<string, unknown>> = {
  route: {
    name: string
    params?: ParamList
  }
}

export type ScreenProps<T = unknown> = {
  name: string
  component: (ReactNode | ((p: T) => React.JSX.Element | null))
  options?: StackNavigationOptions & {
    headerSearchBarOptions?: Record<string, unknown> // Options to render a native search bar on iOS. Search bars are rarely static so normally it is controlled by passing an object to headerSearchBarOptions navigation option in the component's body. You also need to specify contentInsetAdjustmentBehavior="automatic" in your ScrollView, FlatList etc. If you don't have a ScrollView, specify headerTransparent: false.
  }
}