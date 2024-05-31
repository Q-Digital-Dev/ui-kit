import React, { useCallback, useEffect, useState } from 'react'
import sleep from '~shared/utils/sleep'
import { PView } from './popupMenu.options'
import classNames from 'classnames'

function PopupMenuView({ config, ...p }: PView) {
  const [active, setActive] = useState(p.active)
  const [closing, setClosing] = useState(false)
  const close = useCallback(() => {
    setClosing(true)
    setTimeout(() => {
      p.close()
      setClosing(false)
    }, 500)
  }, [p])

  useEffect(() => {
    if (p.active) {
      setActive(true)
      setClosing(false)
    } else {
      setClosing(true)
      sleep(500).then(() => {
        setActive(false)
        setClosing(false)
      })
    }
  }, [p])

  return (
    <div
      className="w-full h-full flex fixed left-0 top-0"
    >
      <div
        className={classNames(
          ['w-full h-full absolute z-10 animate__animated animate__faster'],
          {
            animate__fadeIn: !closing,
            animate__fadeOut: closing,
          },
        )}
      >
        <div
          onClick={close}
          className={classNames(
            ['w-full h-full absolute z-10 cursor-pointer'],
            {
              'bg-black opacity-80': active,
            },
          )}
        />
      </div>

      <div
        className={classNames(
          [
            'mt-auto opacity-90 z-50 w-full items-center px-1 animate__animated animate__faster',
          ],
          {
            animate__fadeInUp: !closing,
            animate__fadeOutDown: closing,
            hidden: !active,
          },
        )}
      >
        {!!config.title && (
          <div className="text-black mb-2 font-black text-2xl items-center text-center">
            {config.title}
          </div>
        )}
        {config.groups.map((group, key) => (
          <div
            key={key}
            className="w-full bg-gray-300 dark:bg-gray-900 mb-1 rounded-xl"
          >
            {!!group.title && (
              <div className="text-black dark:text-white mb-1 font-black text-lg text-center py-1">
                {group.title}
              </div>
            )}
            {group.buttons.map((button, bkey) => (
              <div
                key={bkey}
                onClick={() =>
                  button.onPress ? button.onPress(close) : close()
                }
                className={`py-4 cursor-pointer bg-white dark:bg-gray-900 ${
                  bkey === group.buttons.length - 1 ||
                  'border-b border-t border-solid border-gray-400 dark:border-black'
                } ${bkey > 0 || 'rounded-t-xl'} ${
                  bkey < group.buttons.length - 1 || 'rounded-b-xl'
                }`}
              >
                <div className="text-center text-black dark:text-white">
                  {button.title}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default PopupMenuView
