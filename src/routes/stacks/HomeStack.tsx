import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ROUTE } from '../../constants'
import {
  Home,
  Ranking,
  ChooseMission,
  MyMissions,
  MyMissionDetails,
  ProvePhotoOrVideo,
  ProveCameraScreen,
  MissionDetails,
  CouponStore,
  CouponDetails,
  MyCoupons
} from '../../screens'
import { CouponVizualization } from '../../screens/home/couponStore/couponDetails/couponVisualization'

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
        <Screen name={ROUTE.PROVEPHOTOORVIDEO} component={ProvePhotoOrVideo} />
        <Screen name={ROUTE.PROVECAMERASCREEN} component={ProveCameraScreen} />
        <Screen name={ROUTE.COUPONSTORE} component={CouponStore} />
        <Screen name={ROUTE.COUPONSDETAILS} component={CouponDetails} />
        <Screen
          name={ROUTE.COUPONVIZUALIZATION}
          component={CouponVizualization}
        />
        <Screen name={ROUTE.MYCOUPONS} component={MyCoupons} />
      </Navigator>
    </>
  )
}
