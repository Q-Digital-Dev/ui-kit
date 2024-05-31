import randomKey from './randomKey'

export default function randomId(count: number) {
  return parseInt(randomKey(count, '0123456789'))
}
