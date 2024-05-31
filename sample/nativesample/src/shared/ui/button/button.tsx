import React, { useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { ButtonP, ButtonRef, ButtonType } from './button.options'
import { GestureResponderEvent, TouchableHighlight, TouchableOpacity } from 'react-native'
import Preloader from './ui/preloader'
import Title from './ui/title'
import classNames from 'classnames'

export default React.forwardRef<ButtonRef, ButtonP>(function ({
  onPress, children, throttleTime,
  showPreloader, title, colorPreloader,
  titleClassName, titleProps,
  disabled, ...p
}, ref) {
  const [isBlocked, setBlocked] = useState(false)
  const throttleRef = useRef<NodeJS.Timeout>()
  const buttonRef = useRef<TouchableHighlight | TouchableOpacity>(null)

  const onPressHandler = useCallback(async (e?: GestureResponderEvent) => {
    if (isBlocked || disabled) {
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
  }, [onPress, isBlocked, disabled])

  useEffect(() => {
    return () => {
      clearTimeout(throttleRef.current)
      setBlocked(false)
    }
  }, [throttleRef])

  useImperativeHandle(ref, () => ({
    button: buttonRef.current,
    press: onPressHandler
  }), [buttonRef, onPressHandler])

  if (!p.buttonType || p.buttonType === ButtonType.TOUCHABLE_OPACITY) {
    return (
      <TouchableOpacity
        disabled={disabled || isBlocked}
        activeOpacity={0.8}
        className={classNames('py-2 px-4 bg-red-500 rounded flex-row', {
          'opacity-80': isBlocked || disabled
        })}
        {...p}
        ref={buttonRef as any}
        onPress={onPressHandler}
      >
        <>
          <Preloader
            isBlocked={isBlocked}
            showPreloader={showPreloader}
            colorPreloader={colorPreloader}
          />
          {title ? (
            <Title
              titleClassName={titleClassName}
              {...titleProps}
              title={title}
            />
          ) : children}
        </>
      </TouchableOpacity>
    )
  }
  else {
    return (
      <TouchableHighlight
        disabled={disabled || isBlocked}
        className={classNames('py-2 px-4 bg-red-500 rounded flex-row', {
          'opacity-80': isBlocked || disabled
        })}
        {...p}
        ref={buttonRef as any}
        onPress={onPressHandler}
      >
        <>
          <Preloader
            isBlocked={isBlocked}
            showPreloader={showPreloader}
            colorPreloader={colorPreloader}
          />
          {title ? (
            <Title
              titleClassName={titleClassName}
              {...titleProps}
              title={title}
            />
          ) : children}
        </>
      </TouchableHighlight>
    )
  }
})