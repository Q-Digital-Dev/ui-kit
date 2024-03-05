import React, {
  forwardRef,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'
import { InputP, InputRef } from './input.options'
import { View, TouchableOpacity, Text } from '../../styledComponents'
import classNames from 'classnames'
import Times from './assets/times.svg'
import InputLegacy from './ui/input.legacy'
import InputMask from './ui/input.mask'
import ClosedEye from './assets/closedEye.svg'
import OpenedEye from './assets/openedEye.svg'

export const Input = forwardRef<InputRef, InputP>(function Input(
  {
    label,
    error,
    placeholderTextColor,
    inputContainerStyle,
    inputContainerClassName,
    containerStyle,
    containerClassName,
    leftElement,
    className,
    rightElement,
    isShowClear,
    isPassword,
    ...p
  },
  ref,
) {
  const inputRef = useRef<InputRef>(null)
  const [clearState, setClearState] = useState(false)
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(isPassword)
  const InputElement = useMemo(
    () => ('mask' in p ? InputMask : InputLegacy),
    [p],
  )

  useImperativeHandle(ref, () => inputRef.current as InputRef, [inputRef])

  return (
    <View style={containerStyle} className={containerClassName}>
      {label && (
        <Text className="text-black font-bold mb-1 text-lg">{label}</Text>
      )}

      <View
        className={classNames(
          'w-full flex-row border border-solid border-black/10 rounded-lg px-2',
          inputContainerClassName,
          {
            'border-red-500': error,
            'pl-0': leftElement,
            'pr-0': rightElement || (isShowClear && clearState),
          },
        )}
        style={inputContainerStyle}
      >
        <View className="flex-row">{leftElement}</View>

        <InputElement
          className={classNames("h-10 flex-1 p-0 py-0 pb-0 pt-0 text-base leading-5 w-full text-black bg-transparent", className)}
          placeholderTextColor={placeholderTextColor || '#00000080'}
          ref={inputRef}
          setClearState={setClearState}
          secureTextEntry={isSecureTextEntry}
          {...(p as any)}
        />

        <View className="flex-row">
          {clearState && isShowClear && (
            <TouchableOpacity
              className="px-2 py-1 justify-center items-center"
              onPress={() => {
                inputRef.current?.change('')
              }}
            >
              <Times />
            </TouchableOpacity>
          )}
          {isPassword && (
            <TouchableOpacity
              className="px-2 py-1 justify-center items-center"
              onPress={() => setIsSecureTextEntry(!isSecureTextEntry)}
            >
              {isSecureTextEntry ? <ClosedEye /> : <OpenedEye />}
            </TouchableOpacity>
          )}

          {rightElement}
        </View>
      </View>

      {error && <Text className="text-red-500 mt-1 text-sm">{error}</Text>}
    </View>
  )
})