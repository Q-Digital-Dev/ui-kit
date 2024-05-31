export default function replaceAll(input: string, search: string | Array<string>, replacement: string): string {
  if (Array.isArray(search)) {
    search.forEach((_search) => {
      input = replaceAll(input, _search, replacement)
    })

    return input
  }

  return input.split(search).join(replacement);
}