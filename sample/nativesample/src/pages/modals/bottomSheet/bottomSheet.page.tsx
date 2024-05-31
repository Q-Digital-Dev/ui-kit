import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { BottomSheetPageP } from './bottomSheet.page.options'
import { useNavigation } from '@react-navigation/native'

function BottomSheetPage(p: BottomSheetPageP) {
  const navigation = useNavigation()
  const config = p.route.params.config
  const children = p.route.params.children

  return (
    <View className="w-full h-full">
      <TouchableOpacity
        onPress={navigation.goBack}
        className="w-full h-full absolute z-40"
      />

      <View
        className={[
          'mt-auto flex-1 z-50 w-full items-center max-h-8/10',
          'bg-white dark:bg-gray-900 rounded-t-xl',
          p.route.params.className,
        ].join(' ')}
      >
        {children(config)}
      </View>
    </View>
  )
}

export default BottomSheetPage
