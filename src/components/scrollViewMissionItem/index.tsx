import React from 'react'
import { Circle, Container, Content, CustomText } from './styles'
import { theme } from '../../constants'
import { Text } from 'react-native'

interface ScrollViewMissionItemProps {
  logradouro: string
  uf: string
  localidade: string
  cep: string
  horario: string
  titulo: string
  tipo: 'Descarte' | 'Tratamento' | 'Quiz' | string
}

export const ScrollViewMissionItem: React.FC<ScrollViewMissionItemProps> = ({
  logradouro,
  uf,
  localidade,
  cep,
  horario,
  titulo,
  tipo
}) => {
  return (
    <Container>
      <Circle type={tipo}>
        <Text style={{ fontSize: 32, color: 'white', fontWeight: '300' }}>
          {tipo[0]}
        </Text>
      </Circle>
      <Content>
        <CustomText
          style={{ fontSize: 24, fontFamily: theme.FONTS.interlight }}
        >
          {titulo}
        </CustomText>
        <CustomText style={{ color: theme.COLORS.gray_600 }} numberOfLines={1}>
          {logradouro.substring(0, 10)}, {localidade.substring(0, 10)} - {uf},{' '}
          {cep}
        </CustomText>
        <CustomText style={{ color: theme.COLORS.gray_600 }}>
          Horario: {horario}
        </CustomText>
      </Content>
    </Container>
  )
}
