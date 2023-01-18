import React from 'react'
import { Container, Content, CustomImage, CustomText } from './styles'
import { IMAGES } from '../../assets'
import { theme } from '../../constants'
import { View } from 'react-native'
import { string } from 'yup/lib/locale'



interface ScrollViewMissionItemProps  {
  logradouro: string;
  uf: string;
  localidade: string;
  cep: string;
}

export const ScrollViewMissionItem:React.FC<ScrollViewMissionItemProps> = (
  {logradouro, uf, localidade, cep}
) => {
  


  return (    
    <Container>
      <CustomImage source={IMAGES.notRealPersonImage} />
      <Content>
        <CustomText
          style={{ fontSize: 24, fontFamily: theme.FONTS.interlight }}
        >
          Descarte de alumínio
        </CustomText>
        <CustomText style={{ color: theme.COLORS.gray_600 }} numberOfLines={1}>
          {logradouro.substring(0,10)}, {localidade.substring(0,10)} - {uf}, {cep}
          
        </CustomText>
        <CustomText style={{ color: theme.COLORS.gray_600 }}>
          Horario: 8:00 AM - 17:00 PM
        </CustomText>
      </Content>
    </Container>    

  )
}
