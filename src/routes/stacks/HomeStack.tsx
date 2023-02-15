import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ROUTE } from '../../constants'
import { Home, Ranking, ChooseMission } from '../../screens'
import { missionDataProps } from '../../services/mock'
import { MissionDetails } from '../../screens/home/chooseMission/missionDetails'

export interface HomeStackParams {
  HomePage: undefined
  Ranking: undefined
  BuscarMissões: undefined
  MissionDetails: {
    mission: missionDataProps
  }
  [key: string]: undefined | { mission: missionDataProps }
}
const { Navigator, Screen } = createStackNavigator<HomeStackParams>()

export const HomeStack: React.FC = () => {
  // console.log(Navigator)
  return (
    <>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name={ROUTE.HOME} component={Home} />
        <Screen name={ROUTE.RANKING} component={Ranking} />
        <Screen name={ROUTE.CHOOSEMISSION} component={ChooseMission} />
        <Screen name={ROUTE.MISSIONDETAILS} component={MissionDetails} />
      </Navigator>
    </>
  )
}
