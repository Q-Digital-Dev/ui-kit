import { ActivityIndicator, View } from "react-native"
import { ButtonP } from "../button.options"

export default function ({
  showPreloader,
  isBlocked,
  colorPreloader = 'white'
}: Pick<ButtonP, 'showPreloader' | 'colorPreloader'> & { isBlocked: boolean }) {
  if (showPreloader && isBlocked) {
    return (
      <View
        className='mr-2'
      >
        <ActivityIndicator
          color={colorPreloader}
        />
      </View>
    )
  }

  return null
}