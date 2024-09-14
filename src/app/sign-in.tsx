import { View, Text } from 'react-native'
import LoginForm from '../modules/auth/sign-in/LoginForm'

export default function SignIn() {
  return (
    <View className="flex-1 px-4">
      <View className="flex-1 justify-center">
        <Text className="text-4xl text-white font-semibold">
          Bem-vindo de volta!
        </Text>
        <Text className="text-gray-400 font-normal">
          Bem-vindo de volta, sentimos sua falta
        </Text>
      </View>
      <LoginForm />
    </View>
  )
}
