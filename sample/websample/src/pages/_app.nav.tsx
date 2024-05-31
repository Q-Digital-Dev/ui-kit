import '~styles/reset.css'
import '~styles/globals.css'
import '~styles/font-awesome-4.7.0/css/font-awesome.min.css'
import type { AppProps } from 'next/app'
import Alert from '~shared/ui/modals/alert/alert'
import BottomSheet from '~shared/ui/modals/bottomSheet/bottomSheet'
import PopupMenu from '~shared/ui/modals/popupMenu/popupMenu'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Alert />
      <BottomSheet />
      <PopupMenu />
    </>
  )
}
