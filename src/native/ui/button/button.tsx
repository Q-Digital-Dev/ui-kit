import React, { useEffect, useRef, useState } from 'react'
import { ButtonP, ButtonTheme } from './button.options'
import { ActivityIndicator, Text, TouchableOpacity, View } from '../../styledComponents'
import classNames from 'classnames'

export const Button = function ({
  buttonTheme = ButtonTheme.BASE,
  className,
  onPress,
  title,
  children,
  titleProps,
  disabled,
  showPreloader,
  throttleTime,
  titleClassName,
  forceShowPreloader,
  ...p
}: ButtonP) {
  const [isBlocked, setBlocked] = useState(false)
  const throttleRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    return () => {
      clearTimeout(throttleRef.current)
      setBlocked(false)
    }
  }, [throttleRef])

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={classNames(
        'px-5 py-2 rounded-lg flex-row items-center justify-center',
        {
          'bg-red-500 border border-solid border-transparent': buttonTheme === ButtonTheme.BASE,
          'border border-solid border-gray-300': buttonTheme === ButtonTheme.BORDERED,
          'opacity-50': disabled || (showPreloader === 'opacity' && isBlocked) || forceShowPreloader,
        },
      )}
      onPress={async e => {
        if (isBlocked) {
          return
        }

        setBlocked(true)

        await onPress?.(e)

        if (throttleTime) {
          throttleRef.current = setTimeout(() => {
            setBlocked(false)
          }, throttleTime);
        }
        else {
          setBlocked(false)
        }
      }}
      disabled={disabled || forceShowPreloader}
      {...p}
    >
      {((showPreloader && isBlocked && showPreloader !== 'opacity') || forceShowPreloader) && (
        <View
          className={classNames("mr-2", {
            'absolute w-full h-full left-0 top-0 justify-center items-center mr-0 z-20': showPreloader === 'center'
          })}
        >
          <ActivityIndicator
            color={buttonTheme === ButtonTheme.BASE ? 'white' : 'black'}
          />
        </View>
      )}

      {title ? (
        <Text
          className={classNames('text-base text-center font-bold', {
            'text-white': buttonTheme === ButtonTheme.BASE,
            'text-black': buttonTheme === ButtonTheme.BORDERED || buttonTheme === ButtonTheme.EMPTY,
          }, titleClassName)}
          {...titleProps}
        >
          {title}
        </Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  )
}