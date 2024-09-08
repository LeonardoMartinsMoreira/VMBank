import { View, Text, Image } from 'react-native'
import McIcon from '@expo/vector-icons/MaterialCommunityIcons'
import { router } from 'expo-router'
import SignUpForm from '../modules/auth/sign-up/SignUpForm'

export default function SignUp() {
  const handleBack = () => router.back()

  return (
    <View className="flex-1 px-6">
      <McIcon name="chevron-left" color="white" size={56} onPress={handleBack} />
      <View className="items-center">
        <Image source={require('../assets/images/icon.png')} className="w-40 h-14" />
        <View className="items-center">
          <Text className="text-4xl text-white font-semibold">Bem vindo!</Text>
          <Text className="text-gray-400 font-normal">Venha fazer parte do melhor banco do Brasil</Text>
        </View>
      </View>
      <SignUpForm />
    </View>
  )
}
