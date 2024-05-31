import { createEvent, createStore } from 'effector'
import { persist } from '@effector-storage/react-native-async-storage'

export function createEffector<T>(
  name: string,
  initialData: T,
  persistEnabled?: boolean,
) {
  let response = {
    // create store
    store: createStore<T>(initialData),
    // create setter event
    setter: createEvent<T>(),
  }

  // subscribe on setter event
  response.store.on(response.setter, (_, data) => {
    return data
  })

  // store sync
  if (persistEnabled) {
    persist({
      store: response.store,
      key: name,
    })
  }

  return response
}
