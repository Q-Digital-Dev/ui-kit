import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { PopupMenuPageP } from './popupMenu.page.options'
import { useNavigation } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

function PopupMenuPage(p: PopupMenuPageP) {
  const navigation = useNavigation()
  const insets = useSafeAreaInsets()
  const config = p.route.params.config

  return (
    <View className="w-full h-full">
      <TouchableOpacity
        onPress={navigation.goBack}
        className="w-full h-full absolute z-40"
      />

      <View
        className="mt-auto opacity-90 z-50 w-full items-center px-2"
        style={{ paddingBottom: insets.bottom }}
      >
        {!!config.title && (
          <Text className="text-black mb-2 font-black text-2xl items-center">
            {config.title}
          </Text>
        )}
        {config.groups.map((group, key) => (
          <View
            key={key}
            className="w-full bg-gray-300 dark:bg-gray-900 mb-1 rounded-xl"
          >
            {!!group.title && (
              <Text className="text-black dark:text-white mb-1 font-black text-lg text-center py-1">
                {group.title}
              </Text>
            )}
            {group.buttons.map((button, bkey) => (
              <TouchableOpacity
                key={bkey}
                onPress={() =>
                  button.onPress
                    ? button.onPress(navigation.goBack)
                    : navigation.goBack()
                }
                className={`py-4 bg-white dark:bg-gray-900 ${bkey === group.buttons.length - 1 ||
                  'border-b border-gray-400 dark:border-black'
                  } ${bkey > 0 || 'rounded-t-xl'} ${bkey < group.buttons.length - 1 || 'rounded-b-xl'
                  }`}
              >
                <Text className="text-center text-black dark:text-white">
                  {button.title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  )
}

export default PopupMenuPage
