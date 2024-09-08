import { View, Text } from 'react-native'
import { SignUpForm } from '../modules/auth/sign-up/SignUpForm'

export default function SignUp() {
  return (
    <View className="flex-1 px-6">
      <View className="flex-1 justify-evenly">
        <View className="flex-1 justify-center">
          <Text className="text-4xl text-white font-bold">Bem vindo de volta!</Text>
          <Text className="text-gray-400">Bem-vindo de volta, sentimos sua falta</Text>
        </View>
        <SignUpForm />
      </View>
    </View>
  )
}
