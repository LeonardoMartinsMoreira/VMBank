import { Image, TouchableOpacity, View } from 'react-native'
import McIcon from '@expo/vector-icons/MaterialCommunityIcons'
import { When } from 'react-if'
import { router } from 'expo-router'

interface IHeader {
  title?: string
  headerLeft?: boolean
  showLogo?: boolean
  headerRight?: boolean
}

export function Header({ headerLeft = true, headerRight = false, title, showLogo = true }: IHeader) {
  const handleBack = () => router.back()

  return (
    <View className="flex-row pt-4 bg-black-100 items-center">
      <When condition={headerLeft}>
        <TouchableOpacity onPress={handleBack}>
          <McIcon name="chevron-left" size={54} color="white" onPress={handleBack} />
        </TouchableOpacity>
      </When>
      <When condition={showLogo && !title}>
        <View className="absolute w-full items-center">
          <Image source={require('../assets/images/icon.png')} className="h-10 w-28" resizeMode="cover" />
        </View>
      </When>
      <When condition={title && !showLogo}></When>
      <When condition={headerRight}></When>
    </View>
  )
}
