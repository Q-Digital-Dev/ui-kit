import React from 'react'
import { InputP } from './input.options'

export const Input: React.FC<InputP> = ({ name }) => {
  return (
    <div>
      web {name}
    </div>
  )
}

export default Input