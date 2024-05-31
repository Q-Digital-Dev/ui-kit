import React, { useEffect } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { AlertPageP } from './alert.page.options'
import { useNavigation } from '@react-navigation/native'

export default function AlertPage(p: AlertPageP) {
  const navigation = useNavigation()
  const config = p.route.params?.config

  useEffect(() => {
    return () => {
      p.route.params?.config.onClose?.()
    }
  }, [p])

  if (!config) {
    return null
  }

  return (
    <View className="w-full h-full">
      <TouchableOpacity
        onPress={navigation.goBack}
        className="w-full h-full absolute z-40"
      />

      <View className="m-auto bg-white dark:bg-gray-900 opacity-90 z-50 rounded-lg w-64 items-center">
        <View className="p-4">
          <Text
            className="text-black dark:text-white font-bold text-xl text-center"
          >
            {config.title}
          </Text>
          {!!config.subTitle && (
            <Text
              className="text-black dark:text-white text-lg mt-1 text-center"
            >
              {config.subTitle}
            </Text>
          )}
        </View>
        <View className="border-t w-full flex-row">
          {config.buttons.map((button, key) => (
            <TouchableOpacity
              key={key}
              className={`flex-1 p-2 py-3 ${button.className}`}
              onPress={() => button.onPress(navigation.goBack, config.onApply)}
            >
              <Text
                className={`text-black dark:text-white text-center ${button.textClassName}`}
              >
                {button.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  )
}
