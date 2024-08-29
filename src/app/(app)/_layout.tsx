import { Redirect, Stack } from 'expo-router'
import React from 'react'

export default function TabLayout() {
  const isLogged = false

  if (!isLogged) return <Redirect href="/sign-in" />

  return (
    <Stack>
      <Stack.Screen name="(tabs)" />
    </Stack>
  )
}
