import React, { forwardRef, useImperativeHandle, useRef, useState } from "react";
import InputMask from "react-input-mask";
import { InputRef } from "../input.options";
import { InputMaskP } from "./input.ui.options";
import replaceAll from "~shared/utils/replaceAll";

export default forwardRef<InputRef, InputMaskP>(function ({ onChangeText, onChange, setClearState, alwaysShowMask = true, ...p }, ref) {
  const inputRef = useRef<InputMask>(null)
  const [values, setValues] = useState({
    masked: '',
    unmasked: '',
  })


  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const { target: { value } } = e
    onChange?.(e)
    onChangeTextHandler(value)
  }

  function onChangeTextHandler(masked: string) {
    const unmasked = replaceAll(masked, ['-', '_', '(', ')', ' '], '')
    setClearState(Boolean(unmasked))
    setValues({
      masked,
      unmasked,
    })
    
    onChangeText?.(unmasked)
  }

  useImperativeHandle(ref, () => ({
    ref: inputRef.current,
    get() {
      return values.unmasked
    },
    change(value) {
      onChangeTextHandler(value)
    },
  }), [inputRef, onChangeText])

  return (
    <InputMask
      ref={inputRef}
      value={values.masked}
      alwaysShowMask={alwaysShowMask}
      onChange={onChangeHandler}
      {...p}
    />
  )
})
