import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Profile } from '../../screens'
import { HomeStack } from './HomeStack'

const { Navigator, Screen } = createBottomTabNavigator()

export const TabNavigator = () => {
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      // initialRouteName={ROUTE.HOME}
    >
      <Screen name="Home" component={HomeStack} />
      <Screen name="Perfil" component={Profile} />
    </Navigator>
  )
}
