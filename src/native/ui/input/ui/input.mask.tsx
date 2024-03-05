import React, { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { TextInput } from "react-native";
import MaskInput, { formatWithMask } from "react-native-mask-input";
import { InputRef } from "../input.options";
import { InputMaskP } from "./input.ui.options";

export default forwardRef<InputRef, InputMaskP>(function ({ onChangeText, setClearState, ...p }, ref) {
  const inputRef = useRef<TextInput>(null)
  const [values, setValues] = useState(formatWithMask({ mask: p.mask, text: p.defaultValue }))

  function onChangeTextHandler(masked: string, unmasked: string, obfuscated: string) {
    setClearState(Boolean(unmasked))
    setValues({ masked, unmasked, obfuscated })
    onChangeText?.(unmasked)
  }

  useImperativeHandle(ref, () => ({
    ref: inputRef.current,
    get() {
      return values.unmasked
    },
    change(value) {
      onChangeTextHandler(value, value, value)
    },
  }), [inputRef, onChangeText])

  return (
    <MaskInput
      ref={inputRef}
      value={values.masked}
      onChangeText={onChangeTextHandler}
      {...p}
    />
  )
})
