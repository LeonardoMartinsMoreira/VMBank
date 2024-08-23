import { Tabs } from 'expo-router'
import React from 'react'
import { TabBarIcon } from '@/components/navigation/TabBarIcon'
import { View } from 'react-native'

export default function TabLayout() {
  return (
    <View className="flex-1 bg-black">
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#181816',
            borderTopWidth: 0,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          },
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarLabelStyle: {
              color: '#ffffff',
            },
            title: 'Home',
            tabBarIcon: ({ focused }) => <TabBarIcon name={focused ? 'home' : 'home-outline'} color="white" />,
          }}
        />

        <Tabs.Screen
          name="explore"
          options={{
            tabBarLabelStyle: {
              color: '#ffffff',
            },
            title: 'Explore',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color="white" />
            ),
          }}
        />
        <Tabs.Screen
          name="transaction"
          options={{
            title: 'Transações',
            tabBarLabelStyle: {
              color: '#ffffff',
            },
            tabBarIcon: ({ focused }) => (
              <TabBarIcon name={focused ? 'swap-horizontal' : 'swap-horizontal-outline'} color="white" />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarLabelStyle: {
              color: '#ffffff',
            },
            tabBarIcon: ({ focused }) => <TabBarIcon name={focused ? 'person' : 'person-outline'} color="white" />,
          }}
        />
      </Tabs>
    </View>
  )
}
