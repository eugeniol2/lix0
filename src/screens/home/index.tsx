import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { ICONS, IMAGES } from '../../assets'
import {
  HomeNavigationBoxButton,
  HomeDashBoard,
  IconButton
} from '../../components'

import {
  CustomImage,
  SafeAreaViewContainer,
  Name,
  NavigationButtonsContainer,
  UserInfoView,
  IconsView,
  HomeHeaderContainer,
  HomeBodyContainer,
  HomeDashBoardContainer
} from './styles'

export const Home: React.FC = () => {
  const navigation = useNavigation()

  return (
    <>
      <SafeAreaViewContainer>
        <HomeHeaderContainer>
          <UserInfoView>
            <CustomImage source={IMAGES.notRealPersonImage} />
            <Name>Jessica pereira</Name>
          </UserInfoView>
          <IconsView>
            <IconButton
              iconOnPress={() => {
                // console.log('Bell icon pressed')
              }}
              iconPath={ICONS.BellIcon}
            />
            <IconButton
              iconOnPress={() => {
                // console.log('LogOut icon pressed')
              }}
              iconPath={ICONS.LogOutIcon}
              style={{ marginLeft: 16 }}
            />
          </IconsView>
        </HomeHeaderContainer>
        <HomeBodyContainer>
          <HomeDashBoardContainer>
            <HomeDashBoard
              userPointsValue="1200"
              rankingButton={() => {
                // console.log('left button pressed')
                navigation.navigate('Ranking')
              }}
              missionsButton={() => {
                // console.log('right button pressed')
              }}
            />
          </HomeDashBoardContainer>
          <NavigationButtonsContainer>
            <HomeNavigationBoxButton
              title="Missões"
              onPress={() => {
                // console.log('missões')
              }}
              iconName={ICONS.StarSparkle}
            />
            <HomeNavigationBoxButton
              title="Coleta"
              onPress={() => {
                // console.log('Coleta')
              }}
              iconName={ICONS.SearchHomeIcon}
            />
            <HomeNavigationBoxButton
              title="Cupons"
              iconName={ICONS.Coupon}
              onPress={() => {
                // console.log('Cupons')
              }}
            />

            <HomeNavigationBoxButton
              title="Quiz"
              iconName={ICONS.Quiz}
              onPress={() => {
                // console.log('Quiz')
              }}
            />
          </NavigationButtonsContainer>
        </HomeBodyContainer>
      </SafeAreaViewContainer>
    </>
  )
}
