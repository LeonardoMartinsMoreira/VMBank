import { router } from 'expo-router'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { Button } from '../components/Button'

export default function Choose() {
  const handleNavigateToLogin = () => router.navigate('/sign-in')
  const handleNavigateToSignUp = () => router.navigate('/sign-up')

  return (
    <View className="flex-1 px-4 gap-y-10">
      <View className="pt-20 items-center">
        <Image
          source={require('../assets/images/Group (1).png')}
          className="h-56 w-72"
        />
      </View>
      <View className="flex-1 justify-center">
        <View className="justify-center flex-1 gap-y-2">
          <Text className="text-white font-bold text-4xl">
            Banco onde for com nosso aplicativo
          </Text>
          <Text className="text-zinc-400 font-light text-base">
            Gerencie suas finanças a qualquer hora e em qualquer lugar com nosso
            aplicativo de banco online.
          </Text>
        </View>
        <View className="flex-1 gap-y-2 justify-center items-center">
          <Button
            className="bg-lime-1000"
            $disabled-bgColor="$lime500"
            backgroundColor="$lime500"
            width={'$full'}
            onPress={handleNavigateToSignUp}
            ButtonTextStyle={{ color: '$white', fontWeight: '$normal' }}
          >
            Se tornar um cliente
          </Button>
          <TouchableOpacity
            className="flex-row py-2 gap-x-1"
            style={{ borderColor: 'transparent' }}
            onPress={handleNavigateToLogin}
          >
            <Text className="text-white">Já é um cliente?</Text>
            <Text className="text-lime-1000">Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
