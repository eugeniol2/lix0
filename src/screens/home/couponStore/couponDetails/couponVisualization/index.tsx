// import { useNavigation } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'
import { useAtom } from 'jotai'
import moment from 'moment'
import React, { useState } from 'react'
import { Image, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { IMAGES } from '../../../../../assets'
import { singleCouponItemAtom } from '../../../../../atoms/storeItemsAtom'
import { userPointsAmountAtom } from '../../../../../atoms/userPoints'
import { MainButton, MainHeader } from '../../../../../components'
import { theme } from '../../../../../constants'
import {
  CustomText,
  DetailsContainer,
  ImageContainer,
  GoBackButton,
  Body,
  Wrapper
} from './styles'

export const CouponVizualization: React.FC = () => {
  const navigation = useNavigation()
  const [isUsed, setIsUsed] = useState(false)
  const [SingleCouponItemAtom] = useAtom(singleCouponItemAtom)
  const [userPointAmount] = useAtom(userPointsAmountAtom)
  const currentTime = moment(new Date()).format('DD/MM/YYYY')

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <MainHeader
          text="Cupons"
          hasUserPoints
          pointsAmount={userPointAmount}
        />
        <Body>
          <Wrapper>
            <ImageContainer>
              <Image source={IMAGES.logo} resizeMode="contain" />
            </ImageContainer>
            <DetailsContainer>
              <CustomText>
                {SingleCouponItemAtom.isPercentage
                  ? `${SingleCouponItemAtom.discount}% OFF`
                  : `R$${SingleCouponItemAtom.discount} OFF`}
              </CustomText>
            </DetailsContainer>
            <Text style={{ fontSize: 14, fontFamily: theme.FONTS.interbold }}>
              Válido nos supermercados parceiros abaixo
            </Text>
            <MainButton
              style={{ marginTop: 41 }}
              color={
                isUsed ? theme.COLORS.auxiliary_red : theme.COLORS.primary_500
              }
              title={isUsed ? 'Cupom utilizado' : 'Utilizar cupom'}
              type="outlined"
              onPress={() => {
                setIsUsed(true)
              }}
            />
          </Wrapper>
          <Wrapper
            style={{
              flex: 1,
              marginTop: 41
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: theme.FONTS.interbold,
                marginBottom: 8
              }}
            >
              {isUsed ? 'DETALHES:' : 'Observações:'}
            </Text>
            {isUsed ? (
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: theme.FONTS.intersemiBold
                }}
              >
                Data da utilização{' '}
                <Text style={{ color: theme.COLORS.secondary_500 }}>
                  {currentTime}
                </Text>
                , seu cupom foi utilizado no{' '}
                <Text style={{ color: theme.COLORS.secondary_500 }}>
                  VerdFrut
                </Text>
                .
              </Text>
            ) : (
              SingleCouponItemAtom.observations.map(item => (
                <Text
                  key={item}
                  style={{
                    fontSize: 14,
                    fontFamily: theme.FONTS.intersemiBold
                  }}
                >
                  {`* ${item}`}
                </Text>
              ))
            )}
          </Wrapper>
          {isUsed && (
            <GoBackButton
              style={{ marginBottom: 16 }}
              onPress={() => {
                navigation.navigate('CouponVizualization')
              }}
            >
              <CustomText style={{ fontSize: 16 }}>VOLTAR</CustomText>
            </GoBackButton>
          )}
        </Body>
      </SafeAreaView>
    </>
  )
}
