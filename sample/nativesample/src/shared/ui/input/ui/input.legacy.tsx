import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { TextInput } from "react-native";
import { InputRef } from "../input.options";
import { InputLegacyP } from "./input.ui.options";

export default forwardRef<InputRef, InputLegacyP>(function ({ setClearState, onChangeText, ...p }, ref) {
  const valueRef = useRef('')
  const inputRef = useRef<TextInput>(null)

  function onChangeTextHandler(value: string) {
    setClearState(Boolean(value))
    inputRef.current?.setNativeProps({ text: value })
    onChangeText?.(value)
    valueRef.current = value
  }

  useImperativeHandle(ref, () => ({
    ref: inputRef.current,
    get() {
      return valueRef.current
    },
    change(value) {
      onChangeTextHandler(value)
    },
  }), [inputRef,  onChangeText, valueRef])

  return (
    <TextInput
      ref={inputRef}
      onChangeText={onChangeTextHandler}
      {...p}
    />
  )
})
