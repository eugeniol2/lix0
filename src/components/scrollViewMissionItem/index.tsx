import React from 'react'
import { Container, Content, CustomImage, CustomText } from './styles'
import { IMAGES } from '../../assets'
import { theme } from '../../constants'

export const ScrollViewMissionItem = () => {
  return (
    <Container>
      <CustomImage source={IMAGES.notRealPersonImage} />
      <Content>
        <CustomText
          style={{ fontSize: 24, fontFamily: theme.FONTS.interlight }}
        >
          Descarte de alumínio
        </CustomText>
        <CustomText style={{ color: theme.COLORS.gray_600 }}>
          Tv. Bobocao, Paudalho - PE, 55825-000
        </CustomText>
        <CustomText style={{ color: theme.COLORS.gray_600 }}>
          Horario: 8:00 AM - 17:00 PM
        </CustomText>
      </Content>
    </Container>
  )
}
