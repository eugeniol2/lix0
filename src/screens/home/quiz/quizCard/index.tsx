import React from 'react'
import {
  ImageSourcePropType,
  Image,
  View,
  TouchableOpacityProps
} from 'react-native'
import {
  CheckBoxContainer,
  Container,
  ImageContainer,
  TextContainer
} from './styles'
import Checkbox from 'expo-checkbox'
import { theme } from '../../../../constants'

interface QuizCardProps extends TouchableOpacityProps {
  iconPath: ImageSourcePropType
  description: string
  isCompleted: boolean
}

export const QuizCard: React.FC<QuizCardProps> = ({
  iconPath,
  description,
  isCompleted,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <View style={{ width: 60, height: 60 }}>
        <ImageContainer>
          <Image
            source={iconPath}
            resizeMode="contain"
            style={{ width: '100%', height: '100%', borderRadius: 32 }}
          />
        </ImageContainer>
      </View>
      <TextContainer>{description}</TextContainer>
      <CheckBoxContainer>
        <Checkbox
          value={isCompleted}
          color={isCompleted ? theme.COLORS.primary_500 : theme.COLORS.red_400}
          style={{ borderRadius: 32 }}
        />
      </CheckBoxContainer>
    </Container>
  )
}
