import React, { useCallback, useEffect, useRef, useState } from 'react'
import { ButtonP } from './button.options'
import Preloader from './ui/preloader'
import Title from './ui/title'
import classNames from 'classnames'

export const Button = function ({ onClick, children, throttleTime, showPreloader, title, colorPreloader, titleClassName, className, titleProps, disabled, ...p }: ButtonP) {
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
      className={classNames('py-2 px-4 bg-red-500 rounded flex-row flex cursor-pointer', className, {
        'opacity-80': isBlocked || disabled
      })}
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