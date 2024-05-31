import { BASE_URL } from "~app/config";
import UserStore from "~app/stores/user";
import { NAVIGATION } from "~app/router";
import ROUTES from "~routes";

const EXIT_PROC = {
  started: false
}

export async function calcDuration(cb: () => Promise<void> | void) {
  const startTime = new Date();

  await cb()

  const endTime = new Date();

  const timeElapsedMilliseconds = endTime.getTime() - startTime.getTime();
  return timeElapsedMilliseconds / 1000
}

export default async function request<T>(
  input: RequestInfo,
  init?: Omit<RequestInit, 'headers'> & { headers?: Record<string, string> } | undefined,
): Promise<{
  status: 'ok' | 'fail'
  data: T
}> {
  return new Promise(async (resolve, reject) => {
    const duration = await calcDuration(async () => {
      try {
        if (typeof input === 'string') {
          input = `${BASE_URL}${input}`
        } else {
          // eslint-disable-next-line prettier/prettier
          (input as any).url = `${BASE_URL}${input.url}`;
        }
        let initLocal: Omit<RequestInit, 'headers'> & { headers: Headers } = {
          headers: new Headers()
        }
        let externalHeaders: Record<string, string> = {}
        if (init) {
          const { headers, ...externalInit } = init
          if (headers) {
            externalHeaders = headers
          }
          initLocal = {
            ...initLocal,
            ...externalInit,
          }
        }

        if (externalHeaders) {
          Object.keys(externalHeaders).forEach((name) => {
            initLocal.headers.append(name, externalHeaders[name])
          })
        }


        const res = await fetch(input, initLocal)
        if (!res.ok) {
          const { status } = res
          let resParsed: any = {}
          try {
            resParsed = JSON.parse((await res.text()).trim())
          } catch (error) {

          }

          const err = new Error(resParsed?.data?.message || res.statusText || `Code: ${status}`)
          err.data = resParsed?.data
          if (resParsed?.data.code === 2 && !EXIT_PROC.started) {
            EXIT_PROC.started = true
            UserStore.setter(null)
            NAVIGATION.replace(ROUTES.launchScreen)
            setTimeout(() => {
              EXIT_PROC.started = false
            }, 3000);
          }
          throw err
        }

        resolve(JSON.parse((await res.text()).trim()))
      } catch (error) {
        reject(error)
      }
    })

    console.log(JSON.stringify(
      {
        url: typeof input === 'string' ? input : input.url,
        method: init?.method,
        params: init?.body,
        duration
      },
      undefined,
      2
    ))
  })
}
