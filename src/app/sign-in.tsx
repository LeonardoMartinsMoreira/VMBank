import { View, Text, Image } from 'react-native'
import McIcon from '@expo/vector-icons/MaterialCommunityIcons'
import { router } from 'expo-router'
import LoginForm from '../modules/login/LoginForm'

export default function SignIn() {
  const handleBack = () => router.back()

  return (
    <View className="flex-1 px-6">
      <McIcon name="chevron-left" color="white" size={56} onPress={handleBack} />
      <View className="items-center pt-4">
        <Image source={require('../assets/images/icon.png')} className="w-40 h-14" />
        <View className="items-center pt-24">
          <Text className="text-4xl text-white font-semibold">Bem vindo de volta!</Text>
          <Text className="text-gray-400 font-normal">Bem-vindo de volta, sentimos sua falta</Text>
        </View>
      </View>
      <LoginForm />
    </View>
  )
}
