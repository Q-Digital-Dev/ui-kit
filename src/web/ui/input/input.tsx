import React, { forwardRef, useImperativeHandle, useMemo, useRef, useState } from "react";
import { InputP, InputRef } from "./input.options";
import classNames from "classnames";
import InputLegacy from './ui/input.legacy'
import InputMask from './ui/input.mask'

export const Input = forwardRef<InputRef, InputP>(function Input({
  label, error,
  inputContainerStyle, inputContainerClassName, containerStyle,
  containerClassName, leftElement, rightElement,
  isShowClear, ...p
}, ref) {
  const inputRef = useRef<InputRef>(null)
  const [clearState, setClearState] = useState(false)
  const InputElement = useMemo(() => 'mask' in p ? InputMask : InputLegacy, [p])

  useImperativeHandle(ref, () => inputRef.current as InputRef, [inputRef])

  return (
    <div
      style={containerStyle}
      className={containerClassName}
    >
      {label && <div className="text-black font-bold mb-1 text-lg">{label}</div>}

      <div
        className={classNames("w-full bg-white flex flex-row border border-solid border-black/50 rounded-lg px-2", inputContainerClassName, {
          'border-red-500': error,
          'pl-0': leftElement,
          'pr-0': rightElement || (isShowClear && clearState),
        })}
        style={inputContainerStyle}
      >
        <div className="flex-row flex">
          {leftElement}
        </div>

        <InputElement
          className='h-10 flex-1 p-0 py-0 pb-0 pt-0 text-base leading-5 text-black bg-transparent outline-none'
          ref={inputRef}
          setClearState={setClearState}
          {...p as any}
        />

        <div className="flex-row flex">
          {clearState && isShowClear && (
            <div
              className='px-2 py-1 justify-center items-center flex'
              onClick={() => {
                inputRef.current?.change('')
              }}
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.5 16.5C12.9183 16.5 16.5 12.9183 16.5 8.5C16.5 4.08172 12.9183 0.5 8.5 0.5C4.08172 0.5 0.5 4.08172 0.5 8.5C0.5 12.9183 4.08172 16.5 8.5 16.5Z"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.5 5.5L11.5 11.5M11.5 5.5L5.5 11.5"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          )}

          {rightElement}
        </div>
      </div>

      {error && <div className="text-red-500 mt-1 text-sm">{error}</div>}
    </div>
  )
})

export default Input