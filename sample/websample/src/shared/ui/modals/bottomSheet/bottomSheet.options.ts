import { CupertinoPane } from 'cupertino-pane'
import { ReactElement } from 'react'
import { createArrayEffector } from '~shared/utils/effector'
import randomKey from '~shared/utils/randomKey'
import sleep from '~shared/utils/sleep'

export type P = {}
export type PView<T> = {
  bottomSheet: BottomSheetItem<T>
  active: boolean
}

type BottomSheetChildren<T> = (p: T) => ReactElement

export type BottomSheetItem<T> = {
  id: string
  bottomSheetManager: BottomSheetManager<T>
  children: BottomSheetChildren<T>
  config: T
}

export const bottomSheetsEffector = createArrayEffector<BottomSheetItem<any>>(
  'bottomSheetEffector',
  [],
)

export class BottomSheetManager<T> {
  private pane?: CupertinoPane
  id?: string
  children: BottomSheetChildren<T>
  config: T

  constructor(children: BottomSheetChildren<T>, config: T) {
    this.children = children
    this.config = config
    this.init()
  }

  init = async () => {
    const id = (this.id = randomKey(
      10,
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    ))
    bottomSheetsEffector.insert({
      id: this.id,
      bottomSheetManager: this,
      children: this.children,
      config: this.config,
    })
    await sleep(0)
    this.pane = await new CupertinoPane(`#${this.id}`, {
      cssClass: 'bg-white dark:bg-gray-900',
      fitHeight: true,
      fitScreenHeight: false,
      backdrop: true,
      backdropOpacity: 0,
      bottomClose: true,
      events: {
        onDidDismiss: () => {
          bottomSheetsEffector.remove('id', id)
        },
        onBackdropTap: () => {
          this.pane?.destroy({ animate: true })
        },
      },
    }).present({ animate: true })
  }

  update = async (config: T) => {
    if (this.id) {
      this.config = { ...this.config, ...config }
      bottomSheetsEffector.update('id', this.id, { config })
      await sleep(0)
      this.pane?.calcFitHeight()
    }
  }

  close = async () => {
    await this.pane?.destroy({ animate: true })
  }
}
