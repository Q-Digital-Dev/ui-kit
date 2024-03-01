import React from 'react';
import { Text } from "react-native"
import { InputP } from './input.options';

export const Input: React.FC<InputP> = ({ name }) => {
  return (
    <Text>
      native {name}
    </Text>
  )
}

export default Input