import { Text } from 'react-native'
import React from 'react'
import { Container, CustomButton } from './styles'

interface TopTabNavigationProps {
  leftButtonName: string
  rightButtonName: string
  isActive: boolean
  leftButtonClick: () => void
  rightButtonClick: () => void
}

export const TopTabNavigation: React.FC<TopTabNavigationProps> = ({
  leftButtonName,
  rightButtonName,
  isActive,
  leftButtonClick,
  rightButtonClick
}) => {
  return (
    <Container>
      <CustomButton isActive={isActive} onPress={leftButtonClick}>
        <Text>{leftButtonName}</Text>
      </CustomButton>
      <CustomButton isActive={!isActive} onPress={rightButtonClick}>
        <Text>{rightButtonName}</Text>
      </CustomButton>
    </Container>
  )
}
