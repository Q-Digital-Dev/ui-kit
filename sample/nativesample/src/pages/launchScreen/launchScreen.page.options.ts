import { PScreen, Route, ScreenProps } from '~app/router'
import LaunchScreenPage from './launchScreen.page'
import ROUTES from '~routes'

export type S = {}
export type PView = PScreen & {}

export const RouteSettings: ScreenProps<PView> = {
  name: ROUTES.launchScreen,
  component: LaunchScreenPage,
  options: {
    headerShown: false,
  },
}

export default RouteSettings
