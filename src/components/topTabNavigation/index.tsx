import React from 'react'
import { Container, CustomButton, CustomText } from './styles'

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
        <CustomText isActive={isActive}>{leftButtonName}</CustomText>
      </CustomButton>
      <CustomButton isActive={!isActive} onPress={rightButtonClick}>
        <CustomText isActive={!isActive}>{rightButtonName}</CustomText>
      </CustomButton>
    </Container>
  )
}
