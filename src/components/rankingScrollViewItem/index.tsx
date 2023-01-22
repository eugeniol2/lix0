import React from 'react'
import { Text } from 'react-native'
import { theme } from '../../constants'
import {
  Container,
  TextContainer,
  CustomImage,
  CustomText,
  Content
} from './styles'

interface RankingScrollViewItemProps {
  userName: string
  city: string
  points: number
  position: number
}

export const RankingScrollViewItem: React.FC<RankingScrollViewItemProps> = ({
  userName,
  city,
  points,
  position
}) => {
  return (
    <Container>
      <CustomImage>
        <Text
          style={{
            fontSize: 40,
            fontFamily: theme.FONTS.interbold,
            color: 'white'
          }}
        >
          {position}
        </Text>
      </CustomImage>
      <Content>
        <TextContainer>
          <CustomText
            style={{
              fontFamily: theme.FONTS.interbold,
              paddingBottom: 4
            }}
          >
            {userName}
          </CustomText>
          <CustomText>{city}</CustomText>
        </TextContainer>
        <TextContainer>
          <CustomText
            style={{
              fontFamily: theme.FONTS.interbold,
              paddingBottom: 4,
              color: theme.COLORS.primary_500
            }}
          >
            {`${points}`}
          </CustomText>
          <CustomText>Pontos</CustomText>
        </TextContainer>
      </Content>
    </Container>
  )
}
