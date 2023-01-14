import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ROUTE } from '../../constants'
import { Home, Ranking } from '../../screens'

const { Navigator, Screen } = createStackNavigator()

export const HomeStack: React.FC = () => {
  // console.log(Navigator)
  return (
    <>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name={ROUTE.HOME} component={Home} />
        <Screen name={ROUTE.RANKING} component={Ranking} />
      </Navigator>
    </>
  )
}
