import React, { useCallback } from 'react'
import { PView } from './alert.options'
import classNames from 'classnames'

function AlertView(p: PView) {
  const config = p.alert
  const close = useCallback(() => {
    p.close(p.alert.id)
  }, [p])

  return (
    <div
      className="absolute z-10 w-full h-full left-0 top-0 flex justify-center items-center"
    >
      <div
        className={classNames(
          'absolute z-10 w-full h-full cursor-pointer left-0 top-0',
          {
            'bg-black opacity-80': p.active,
          },
        )}
        onClick={close}
      />

      <div className="m-auto bg-white dark:bg-gray-900 opacity-90 z-50 rounded-lg w-64 items-center">
        <div className="p-4">
          <div
            className="text-black dark:text-white font-bold text-xl text-center w-full overflow-hidden text-ellipsis"
          >
            {config.title}
          </div>
          {!!config.subTitle && (
            <div
              className="text-black dark:text-white text-lg mt-1 text-center"
            >
              {config.subTitle}
            </div>
          )}
        </div>
        <div className="border-t w-full flex-row flex">
          {config.buttons.map((button, key) => (
            <div
              key={key}
              className={`flex-1 p-2 py-3 cursor-pointer ${button.className}`}
              onClick={() => button.onPress(close, config.onApply)}
            >
              <div
                className={`text-black dark:text-white text-center ${button.textClassName}`}
              >
                {button.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AlertView
