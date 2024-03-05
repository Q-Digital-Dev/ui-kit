import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { InputRef } from "../input.options";
import { InputLegacyP } from "./input.ui.options";

export default forwardRef<InputRef, InputLegacyP>(function ({ setClearState, onChangeText, onChange, ...p }, ref) {
  const valueRef = useRef('')
  const inputRef = useRef<HTMLInputElement>(null)

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const { target: { value } } = e
    onChange?.(e)
    onChangeTextHandler(value)
  }

  function onChangeTextHandler(value: string) {
    setClearState(Boolean(value))
    if(inputRef.current){
      inputRef.current.value = value
    }
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
  }), [inputRef, onChangeText, valueRef])

  return (
    <input
      ref={inputRef}
      onChange={onChangeHandler}
      {...p}
    />
  )
})
