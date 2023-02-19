import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ROUTE } from '../../constants'
import {
  Home,
  Ranking,
  ChooseMission,
  MyMissions,
  MyMissionDetails
} from '../../screens'
import { MissionDetails } from '../../screens/home/chooseMission/missionDetails'

const { Navigator, Screen } = createStackNavigator()

export const HomeStack: React.FC = () => {
  // console.log(Navigator)
  return (
    <>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name={ROUTE.HOME} component={Home} />
        <Screen name={ROUTE.RANKING} component={Ranking} />
        <Screen name={ROUTE.CHOOSEMISSION} component={ChooseMission} />
        <Screen name={ROUTE.MISSIONDETAILS} component={MissionDetails} />
        <Screen name={ROUTE.MYMISSIONS} component={MyMissions} />
        <Screen name={ROUTE.MYMISSIONDETAILS} component={MyMissionDetails} />
      </Navigator>
    </>
  )
}
