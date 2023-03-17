import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { ICONS, IMAGES } from '../../assets'
import { userData } from '../../services/mock'
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
import { useAtom } from 'jotai'
import { userPointsAmountAtom } from '../../atoms/userPoints'

export const Home: React.FC = () => {
  const navigation = useNavigation()
  const [userPointsAmount, setUserPointsAmount] = useAtom(userPointsAmountAtom)

  useEffect(() => {
    setUserPointsAmount(userData.pointsAmount)
  })

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
              userPointsValue={userPointsAmount}
              rankingButton={() => {
                navigation.navigate('Ranking')
              }}
              missionsButton={() => {
                navigation.navigate('BuscarMissões')
              }}
            />
          </HomeDashBoardContainer>
          <NavigationButtonsContainer>
            <HomeNavigationBoxButton
              title="Minhas Missões"
              onPress={() => {
                navigation.navigate('MyMissions')
              }}
              iconName={ICONS.StarSparkle}
            />
            <HomeNavigationBoxButton
              title="Coleta"
              onPress={() => {}}
              iconName={ICONS.SearchHomeIcon}
            />
            <HomeNavigationBoxButton
              title="Cupons"
              iconName={ICONS.Coupon}
              onPress={() => {
                navigation.navigate('CouponStore')
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
