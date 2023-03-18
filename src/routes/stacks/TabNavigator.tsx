import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { theme } from '../../constants'
import { Collect, CouponStore, MyMissions, Profile } from '../../screens'
import { Image } from 'react-native'
import { HomeStack } from './HomeStack'
import { ICONS } from '../../assets'

const { Navigator, Screen } = createBottomTabNavigator()

export const TabNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme.COLORS.primary_100
        },
        tabBarActiveTintColor: theme.COLORS.primary_600,
        headerShown: false
      }}

      // initialRouteName={ROUTE.HOME}
    >
      <Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: () => <Image source={ICONS.home} />
        }}
      />
      <Screen
        name="MyMissions"
        component={MyMissions}
        options={{
          tabBarIcon: () => <Image source={ICONS.book} />
        }}
      />
      <Screen
        name="Collect"
        component={Collect}
        options={{
          tabBarIcon: () => <Image source={ICONS.satellite} />
        }}
      />
      <Screen
        name="CouponStore"
        component={CouponStore}
        options={{
          tabBarIcon: () => <Image source={ICONS.Coupon} />
        }}
      />
      <Screen
        name="Perfil"
        component={Profile}
        options={{
          tabBarIcon: () => <Image source={ICONS.detailsPerson} />
        }}
      />
    </Navigator>
  )
}
