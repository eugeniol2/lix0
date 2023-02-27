// import { useNavigation } from '@react-navigation/native'
import { useAtom } from 'jotai'
import React from 'react'
import { Alert, Image, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { singleCouponItemAtom } from '../../../../atoms/storeItemsAtom'
import { userPointsAmountAtom } from '../../../../atoms/userPoints'
import { MainHeader } from '../../../../components'
import { ICONS, IMAGES } from '../../../../assets'
import {
  ClaimCouponButton,
  Container,
  CustomText,
  DetailsContainer,
  ImageContainer,
  PartnersBox,
  PartnersContainer,
  PriceWrapper
} from './styles'
import { theme } from '../../../../constants'
import { useNavigation } from '@react-navigation/native'
import { addNewCouponAtom } from '../../../../atoms/userCoupons'

export const CouponDetails: React.FC = () => {
  const navigation = useNavigation()
  const [coupon] = useAtom(singleCouponItemAtom)
  const [userPointAmount] = useAtom(userPointsAmountAtom)
  const [, setNewCouponAtom] = useAtom(addNewCouponAtom)

  const couponAddedAlert = () => {
    Alert.alert(
      'Parabêns',
      'Você pode sempre checar seus cupons na tela "meus cupons"',
      [
        {
          text: 'Ok',
          onPress: () => {
            setNewCouponAtom(coupon)
            navigation.navigate('CouponVizualization')
          }
        }
      ]
    )
  }

  return (
    <>
      <SafeAreaView>
        <MainHeader
          text="Cupons"
          hasUserPoints
          pointsAmount={userPointAmount}
        />
        <Container>
          <ImageContainer>
            <Image source={IMAGES.logo} resizeMode="contain" />
          </ImageContainer>
          <DetailsContainer>
            <CustomText>
              {coupon.isPercentage
                ? `${coupon.discount}% OFF`
                : `R$${coupon.discount} OFF`}
            </CustomText>
            <PriceWrapper>
              <CustomText style={{ color: theme.COLORS.primary_600 }}>
                {coupon.price}
              </CustomText>
              <Image source={ICONS.TrashBag} resizeMode="contain" />
            </PriceWrapper>
          </DetailsContainer>
          <Text style={{ fontSize: 14, fontFamily: theme.FONTS.interbold }}>
            Válido nos supermercados parceiros abaixo
          </Text>

          <PartnersContainer>
            <CustomText style={{ fontSize: 20 }}>Parceiros</CustomText>
            <PartnersBox>
              {coupon.companies.map(item => (
                <Text key={item} style={{ margin: 8 }}>
                  {item}
                </Text>
              ))}
            </PartnersBox>
          </PartnersContainer>
          <ClaimCouponButton
            onPress={() => {
              couponAddedAlert()
            }}
          >
            <CustomText style={{ fontSize: 16 }}>RESGATAR</CustomText>
          </ClaimCouponButton>
        </Container>
      </SafeAreaView>
    </>
  )
}
