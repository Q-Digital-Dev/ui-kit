import { Event, Store } from 'effector'

export type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T
}

export type InitEffectorResponse<T> = {
  store: Store<T>
  setter: Event<T>
}

export type InitArrayEffectorResponse<ItemT> = InitEffectorResponse<ItemT[]> & {
  insert: (item: ItemT) => void
  unshift: (item: ItemT) => void
  remove: <K extends keyof ItemT>(name: K, value: ItemT[K]) => void
  update: <K extends keyof ItemT>(
    name: K,
    value: ItemT[K],
    item: PartialRecord<keyof ItemT, unknown>,
  ) => void
  get: <K extends keyof ItemT>(name: K, value: ItemT[K]) => ItemT | undefined
}
