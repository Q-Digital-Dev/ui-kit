import React, { forwardRef, useImperativeHandle, useMemo, useRef, useState } from "react";
import { InputP, InputRef } from "./input.options";
import { Text, TouchableOpacity, View } from "react-native";
import classNames from "classnames";
import Times from './assets/times.svg'
import InputLegacy from './ui/input.legacy'
import InputMask from './ui/input.mask'

export const Input = forwardRef<InputRef, InputP>(function Input({
  label, error, placeholderTextColor,
  inputContainerStyle, inputContainerClassName, containerStyle,
  containerClassName, leftElement, rightElement,
  isShowClear, ...p
}, ref) {
  const inputRef = useRef<InputRef>(null)
  const [clearState, setClearState] = useState(false)
  const InputElement = useMemo(() => 'mask' in p ? InputMask : InputLegacy, [p])

  useImperativeHandle(ref, () => inputRef.current as InputRef, [inputRef])

  return (
    <View
      style={containerStyle}
      className={containerClassName}
    >
      {label && <Text className="text-black font-bold mb-1 text-lg">{label}</Text>}

      <View
        className={classNames("w-full bg-white flex-row border border-solid border-black/50 rounded-lg px-2", inputContainerClassName, {
          'border-red-500': error,
          'pl-0': leftElement,
          'pr-0': rightElement || (isShowClear && clearState),
        })}
        style={inputContainerStyle}
      >
        <View className="flex-row">
          {leftElement}
        </View>

        <InputElement
          className='h-10 flex-1 p-0 py-0 pb-0 pt-0 text-base leading-5 text-black bg-transparent'
          placeholderTextColor={placeholderTextColor || '#00000080'}
          ref={inputRef}
          setClearState={setClearState}
          {...p as any}
        />

        <View className="flex-row">
          {clearState && isShowClear && (
            <TouchableOpacity
              className='px-2 py-1 justify-center items-center'
              onPress={() => {
                inputRef.current?.change('')
              }}
            >
              <Times />
            </TouchableOpacity>
          )}

          {rightElement}
        </View>
      </View>

      {error && <Text className="text-red-500 mt-1 text-sm">{error}</Text>}
    </View>
  )
})

export default Input