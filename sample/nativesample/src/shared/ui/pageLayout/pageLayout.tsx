import classNames from 'classnames'
import React, { useMemo } from 'react'
import { KeyboardAvoidingView, Platform, StatusBar, } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { PageLayoutP } from './pageLayout.options'

export default function ({ layoutClassName, isSafeAreaDisabled, children, style, ...p }: PageLayoutP) {
  const insets = useSafeAreaInsets()
  const combinedStyle = useMemo(() => {
    if (!isSafeAreaDisabled) {
      return ({
        paddingLeft: insets.left,
        paddingTop: insets.top,
        paddingRight: insets.right,
        paddingBottom: insets.bottom,
        ...(style ? style as any : {}),
      })
    }
    return ({
      ...(style ? style as any : {}),
    })
  }, [insets, isSafeAreaDisabled, style])

  return (
    <>
      <StatusBar
        translucent
        animated={false}
        barStyle='dark-content'
      />

      <KeyboardAvoidingView
        style={combinedStyle}
        className={classNames('w-full flex-1 bg-white pt-4 relative', layoutClassName)}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        {...p}
      >
        {children}
      </KeyboardAvoidingView>
    </>
  )
}