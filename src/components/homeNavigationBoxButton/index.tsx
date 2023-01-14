import { Image } from 'react-native'
import React from 'react'
import {
  CustomText,
  NavigationMenuSquare,
  HomeNavigationBoxButtonProps
} from './styles'

export const HomeNavigationBoxButton: React.FC<
  HomeNavigationBoxButtonProps
> = ({ title, iconName, ...rest }) => {
  return (
    <NavigationMenuSquare {...rest}>
      <Image source={iconName} resizeMode="contain" />
      <CustomText title={title}>{title}</CustomText>
    </NavigationMenuSquare>
  )
}
