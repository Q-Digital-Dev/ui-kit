import React from 'react'
import { PView } from './bottomSheet.options'
import classNames from 'classnames'

function BottomSheetView<T>(p: PView<T>) {
  return (
    <div
      className="w-full h-full absolute left-0 top-0"
    >
      <div
        className={classNames(
          ['absolute z-10 w-full h-full cursor-pointer left-0 top-0'],
          {
            'bg-black opacity-80': p.active,
          },
        )}
      />

      <div
        id={p.bottomSheet.id}
        className="bg-white dark:bg-gray-900"
      >
        {p.bottomSheet.children(p.bottomSheet.config)}
      </div>
    </div>
  )
}

export default BottomSheetView
