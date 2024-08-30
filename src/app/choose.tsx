import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'
import { Button, Image } from 'tamagui'

export default function Choose() {
  return (
    <View className="flex-1 px-8 gap-y-8">
      <View className="pt-24 items-center">
        <Image source={require('../assets/images/Group (1).png')} className="h-56 w-72" />
      </View>
      <View className="flex-1 justify-center">
        <View className="items-center justify-center flex-1 gap-y-8">
          <Text className="text-white font-bold text-4xl text-center">Banco onde for com nosso aplicativo</Text>
          <Text className="text-zinc-400 font-light text-lg text-center">
            Gerencie suas finanças a qualquer hora e em qualquer lugar com nosso aplicativo de banco online.
          </Text>
        </View>
        <View className="flex-1 justify-center items-center">
          <Button className="w-full bg-lime-1000" borderRadius="$12">
            Login
          </Button>
          <Text className="text-white font-normal mt-4">
            Já é um cliente? <Text className="text-lime-1000">Login</Text>
          </Text>
        </View>
      </View>
    </View>
  )
}
