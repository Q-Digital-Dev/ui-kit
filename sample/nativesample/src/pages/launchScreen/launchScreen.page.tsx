import React, { useEffect } from 'react'
import { Platform, Text } from 'react-native'
import PageLayout from '~shared/ui/pageLayout'
import SplashScreen from 'react-native-splash-screen'

export default function () {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <PageLayout
      isSafeAreaDisabled
      layoutClassName='bg-black items-center justify-center'
      style={{ paddingTop: Platform.select({ 'default': 16, 'ios': 0 }) }}
    >
      <Text
        className='w-full text-center text-2xl text-white'
      >
        nativesample
      </Text>
    </PageLayout>
  )
}