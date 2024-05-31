import React from 'react'
import {
  bottomSheetsEffector,
  P,
} from './bottomSheet.options'
import BottomSheetView from './bottomSheet.view'
import { useUnit } from 'effector-react'

export default function BottomSheet(p: P) {
  const bottomSheets = useUnit(bottomSheetsEffector.store)

  return (
    <>
      {bottomSheets.map((bottomSheet, key) => (
        <BottomSheetView<T>
          key={bottomSheet.id}
          bottomSheet={bottomSheet}
          active={key === bottomSheets.length - 1}
        />
      ))}
    </>
  )
}