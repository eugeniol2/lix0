import { TouchableOpacityProps, Text, Image } from 'react-native'
import React from 'react'
import { Container, HeaderIcon, HeaderText, PointsBox } from './styles'
import { ICONS } from '../../assets'
import { useNavigation } from '@react-navigation/native'

interface MainHeaderProps extends TouchableOpacityProps {
  text: string
  hasUserPoints?: boolean
  pointsAmount?: number
}

export const MainHeader: React.FC<MainHeaderProps> = ({
  text,
  hasUserPoints,
  pointsAmount,
  ...rest
}) => {
  const navigation = useNavigation()

  return (
    <Container {...rest}>
      <HeaderIcon
        style={{ left: 0 }}
        iconPath={ICONS.navBack}
        iconOnPress={() => {
          navigation.goBack()
        }}
        {...rest}
      />
      <HeaderText>{text}</HeaderText>
      {hasUserPoints && (
        <PointsBox>
          <Text style={{ color: '#138A37' }}>{pointsAmount}</Text>
          <Image source={ICONS.TrashBag} resizeMode="contain" />
        </PointsBox>
      )}
    </Container>
  )
}
