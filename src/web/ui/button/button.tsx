import React, { useCallback, useEffect, useRef, useState } from 'react'
import { ButtonP, ButtonTheme } from './button.options'
import Preloader from './ui/preloader'
import Title from './ui/title'
import classNames from 'classnames'

export const Button = function ({
  buttonTheme = ButtonTheme.BASE,
  className,
  onClick,
  title,
  children,
  titleProps,
  disabled,
  showPreloader,
  throttleTime,
  titleClassName,
  colorPreloader,
  forceShowPreloader,
  ...p
}: ButtonP) {
  const [isBlocked, setBlocked] = useState(false)
  const throttleRef = useRef<NodeJS.Timeout>()

  const onClickHandler = useCallback(async (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isBlocked || disabled) {
      return
    }

    setBlocked(true)

    await onClick?.(e)

    if (throttleTime) {
      throttleRef.current = setTimeout(() => {
        setBlocked(false)
      }, throttleTime);
    }
    else {
      setBlocked(false)
    }
  }, [onClick, disabled, isBlocked])

  useEffect(() => {
    return () => {
      clearTimeout(throttleRef.current)
      setBlocked(false)
    }
  }, [throttleRef])

  return (
    <div
      className={classNames(
        'px-5 py-2 rounded-lg flex-row items-center justify-center',
        className,
        {
          'bg-brand border border-solid border-transparent': buttonTheme === ButtonTheme.BASE,
          'border border-solid border-gray-300': buttonTheme === ButtonTheme.BORDERED,
          'opacity-50': disabled || (showPreloader === 'opacity' && isBlocked) || forceShowPreloader,
        },
      )}
      {...p}
      onClick={onClickHandler}
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
    </div>
  )
}