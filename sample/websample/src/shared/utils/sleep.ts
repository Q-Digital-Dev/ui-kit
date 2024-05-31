export default function sleep(timeout?: number) {
  return new Promise<unknown>((resolve) => {
    setTimeout(resolve, timeout)
  })
}
