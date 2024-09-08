import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import { SafeAreaView, Text, useColorScheme, View } from 'react-native'
import 'react-native-reanimated'
import { Header } from '../components/Header'

SplashScreen.preventAutoHideAsync()

const queryClient = new QueryClient()

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    SpaceMono: require('../assets/fonts/Poppins-Regular.ttf'),
  })

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <QueryClientProvider client={queryClient}>
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
            options={{
              header: () => <Header />,
              headerShown: true,
              contentStyle: { backgroundColor: '#0D0D0C' },
            }}
          />
          <Stack.Screen name="choose" options={{ headerShown: false, contentStyle: { backgroundColor: '#0D0D0C' } }} />
          <Stack.Screen
            name="sign-up"
            options={{
              header: () => <Header />,
              headerShown: true,
              contentStyle: { backgroundColor: '#0D0D0C' },
            }}
          />
          <Stack.Screen name="(app)" options={{ headerShown: false, contentStyle: { backgroundColor: '#0D0D0C' } }} />
        </Stack>
      </SafeAreaView>
    </QueryClientProvider>
  )
}
