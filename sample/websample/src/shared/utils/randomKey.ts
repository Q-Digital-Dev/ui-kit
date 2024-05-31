const { floor, random } = Math

function randomKey(
  count: number,
  possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
) {
  let text = ''

  for (let i = 0; i < count; i++) {
    text += possible.charAt(floor(random() * possible.length))
  }

  return text
}

export default randomKey
