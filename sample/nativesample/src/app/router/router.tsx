import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import routerMap from './routerMap'
import { NAVIGATOR_SETTINGS } from './router.options'
import ROUTES from '~routes'
import { NAVIGATION_REF } from './utils/navigation'
import { PortalProvider } from '@gorhom/portal'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const Stack = createStackNavigator()

export default function Router() {
  return (
    <SafeAreaProvider>
      <PortalProvider>
        <NavigationContainer ref={NAVIGATION_REF}>
          <Stack.Navigator
            initialRouteName={ROUTES.launchScreen}
            screenOptions={NAVIGATOR_SETTINGS}
          >
            {routerMap.map(item => (
              <Stack.Screen {...item} key={item.name} />
            ))}
          </Stack.Navigator>
        </NavigationContainer>
      </PortalProvider>
    </SafeAreaProvider>
  )
}
