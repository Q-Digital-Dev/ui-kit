import { createEvent } from 'effector'
import createEffector from './createEffector'
import { InitArrayEffectorResponse } from './effector.options'

function getInArrayByFieldName<ItemT extends Record<string, unknown>>(
  array: ItemT[],
  fieldName: keyof ItemT,
  fieldValue: string | number,
): ItemT | undefined {
  return array.find(item => item[fieldName] === fieldValue)
}

export default function createArrayEffector<ItemT>(
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

  let response: InitArrayEffectorResponse<ItemT> = {
    store,
    setter,
    insert(item) {
      insert(item)
      return
    },
    unshift(item) {
      unshift(item)
      return
    },
    remove(name, value) {
      remove({ name, value })
    },
    update(name, value, item) {
      update({ name, value, item })
    },
    get(name, value) {
      const list: ItemT[] = store.getState()

      return getInArrayByFieldName<ItemT>(list, name, value)
    },
  }

  return response
}