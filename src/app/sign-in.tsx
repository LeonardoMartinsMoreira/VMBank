import { View, Text, Image } from 'react-native'
import McIcon from '@expo/vector-icons/MaterialCommunityIcons'
import { router } from 'expo-router'
import LoginForm from '../modules/auth/sign-in/LoginForm'

export default function SignIn() {
  return (
    <View className="flex-1 ">
      <View className="flex-1 justify-center">
        <Text className="text-4xl text-white font-semibold">Bem-vindo de volta!</Text>
        <Text className="text-gray-400 font-normal">
          Acesse sua conta com segurança e tenha o controle do seu dinheiro na palma da mão
        </Text>
      </View>
      <LoginForm />
    </View>
  )
}
