import { Slot } from 'expo-router'
import { View } from 'react-native'

export default function _layout() {
  return (
    <View className="bg-gray-900 flex-1">
      <Slot />
    </View>
  )
}
