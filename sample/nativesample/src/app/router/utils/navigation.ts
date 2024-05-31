import {
  CommonActions,
  StackActions,
  createNavigationContainerRef,
} from '@react-navigation/native'

export const NAVIGATION_REF: any = createNavigationContainerRef()

const navigate = (name: string, params?: Record<string, unknown>) => {
  if (NAVIGATION_REF.isReady() && !checkCurrentRoute(name)) {
    NAVIGATION_REF.current?.navigate(name as never, params as never)
  }
}

const goBack = () => {
  if (NAVIGATION_REF.isReady() && NAVIGATION_REF.canGoBack()) {
    NAVIGATION_REF.current?.goBack()
    return true
  }
  return false
}

const replace = (
  name: string,
  config?: {
    setOptions?: () => void
    onStart?: () => void
    onEnd?: () => void
    params?: Record<string, unknown>
  },
) => {
  NAVIGATION_REF.current?.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [
        {
          name,
          params: { replaced: true, ...(config?.params ? config?.params : {}) },
        },
      ],
    }),
  )
}

const replaceArray = (
  routes: {
    name: string
    params: Record<string, string | number>
  }[],
) => {
  NAVIGATION_REF.current?.dispatch(
    CommonActions.reset({
      index: routes.length - 1,
      routes,
    }),
  )
}

const push = (name: string, params?: any) => {
  NAVIGATION_REF.current?.dispatch(StackActions.push(name, params))
}

const checkCurrentRoute = (path: string) => {
  const navigationState = NAVIGATION_REF.getState()
  return !!(navigationState &&
    navigationState?.routes[navigationState?.index].name === path);
}

const getState = (): { routes: { history: Record<string, unknown> }[] } =>
  NAVIGATION_REF.getState()

export const NAVIGATION = {
  navigate,
  goBack,
  replace,
  push,
  replaceArray,
  getState,
  NAVIGATION_REF,
  setParams: <T>(params: T) => NAVIGATION_REF.setParams(params),
}

export default NAVIGATION
