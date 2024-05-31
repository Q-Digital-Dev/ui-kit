import { useEffect, useState } from 'react'

export default function useStateObject<T>(
  props: T,
): [T, (data: Partial<T>) => void] {
  const [state, setData] = useState(props)

  const setter = (_props: Partial<T>) => {
    setData(oldState => {
      return ({ ...oldState, ..._props })
    })
  }

  useEffect(() => {
    setData(props)
  }, [props])

  return [state, setter]
}
