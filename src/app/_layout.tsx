import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import { SafeAreaView, useColorScheme } from 'react-native'
import 'react-native-reanimated'
import { tamaguiConfig } from '../../tamagui.config'
import { TamaguiProvider } from 'tamagui'
import { ToastProvider } from '@tamagui/toast'

SplashScreen.preventAutoHideAsync()

const queryClient = new QueryClient()

export default function RootLayout() {
  const colorScheme = useColorScheme()

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme={colorScheme!}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <QueryClientProvider client={queryClient}>
          <ToastProvider>
            <SafeAreaView style={{ flex: 1 }}>
              <Stack
                screenOptions={{
                  gestureEnabled: true,
                  gestureDirection: 'horizontal',
                  animation: 'ios',
                }}
              >
                <Stack.Screen
                  name="sign-in"
                  options={{ headerShown: false, contentStyle: { backgroundColor: '#0D0D0C' } }}
                />
                <Stack.Screen
                  name="choose"
                  options={{ headerShown: false, contentStyle: { backgroundColor: '#0D0D0C' } }}
                />
                <Stack.Screen
                  name="sign-up"
                  options={{ headerShown: false, contentStyle: { backgroundColor: '#0D0D0C' } }}
                />
                <Stack.Screen
                  name="(app)"
                  options={{ headerShown: false, contentStyle: { backgroundColor: '#0D0D0C' } }}
                />
              </Stack>
            </SafeAreaView>
          </ToastProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </TamaguiProvider>
  )
}
