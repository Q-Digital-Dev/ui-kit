import { createEvent, createStore } from 'effector'
import { persist } from 'effector-storage/local'
import { InitEffectorResponse } from './effector.options'

export default function createEffector<T>(
  name: string,
  initialData: T,
  persistEnabled?: boolean,
): InitEffectorResponse<T> {
  let response: InitEffectorResponse<T> = {
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
