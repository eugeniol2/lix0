import { Image, TouchableOpacityProps } from 'react-native'
import React from 'react'
import {
  Container,
  CustomText,
  Photo,
  PhotoBackground,
  PriceWrapper
} from './styles'
import { ICONS } from '../../../../../assets'
import { theme } from '../../../../../constants'

interface CouponListViewItemProps extends TouchableOpacityProps {
  pointsAmount: number
  discount: number
  isPercentage: boolean
  isUsed: boolean
  type?: 'Supermarket' | 'Store' | 'Restaurant'
}

export const MyCouponsListItem: React.FC<CouponListViewItemProps> = ({
  pointsAmount,
  discount,
  isPercentage,
  isUsed,
  type,
  ...rest
}) => {
  return (
    <Container {...rest} isUsed={isUsed}>
      <PhotoBackground isUsed={isUsed}>
        <Photo source={ICONS.BellIcon} resizeMode="contain" />
      </PhotoBackground>
      <CustomText style={{ color: theme.COLORS.gray_900, marginRight: '30%' }}>
        {isPercentage ? `${discount}% OFF` : `R$${discount} OFF`}
      </CustomText>
      <PriceWrapper>
        <CustomText>{pointsAmount}</CustomText>
        <Image source={ICONS.TrashBag} resizeMode="contain" />
      </PriceWrapper>
    </Container>
  )
}
