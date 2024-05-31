import { createEvent } from 'effector'
import { createEffector } from './createEffector'
import { PartialRecord } from './effector.options'

function getInArrayByFieldName<ItemT extends Record<string, unknown>>(
  array: ItemT[],
  fieldName: keyof ItemT,
  fieldValue: unknown,
): ItemT | undefined {
  return array.find(item => item[fieldName] === fieldValue)
}

export function createArrayEffector<ItemT extends Record<string, unknown>>(
  name: string,
  initialData: ItemT[],
  persistEnabled?: boolean,
) {
  const { store, setter } = createEffector(name, initialData, persistEnabled)
  const insert = createEvent<ItemT>()
  const unshift = createEvent<ItemT>()
  const remove = createEvent<{ name: keyof ItemT; value: unknown }>()
  const update = createEvent<{ name: keyof ItemT; value: unknown; item: any }>()

  store
    .on(insert, (items, element) => [...items, element])
    .on(unshift, (items, element) => [element, ...items])
    .on(remove, (items, { name, value }) =>
      items.filter(element => element[name] !== value),
    )
    .on(update, (items, { name, value, item }) => {
      return items.map(element => {
        if (element[name] === value) {
          Object.keys(item).forEach((key: any) => {
            const name: keyof ItemT = key
            element[name] = item[name]
          })
        }

        return element
      })
    })

  let response = {
    store,
    setter,
    insert(item: ItemT) {
      insert(item)
      return
    },
    unshift(item: ItemT) {
      unshift(item)
      return
    },
    remove<K extends keyof ItemT>(name: K, value: ItemT[K]) {
      remove({ name, value })
    },
    update<K extends keyof ItemT>(
      name: K,
      value: ItemT[K],
      item: PartialRecord<keyof ItemT, unknown>,
    ) {
      update({ name, value, item })
    },
    get<K extends keyof ItemT>(name: K, value: ItemT[K]) {
      const list: ItemT[] = store.getState()

      return getInArrayByFieldName<ItemT>(list, name, value)
    },
  }

  return response
}