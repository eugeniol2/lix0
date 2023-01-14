import { Image, ImageSourcePropType, TouchableOpacityProps } from 'react-native'
import React from 'react'
import { IconButtonContainer } from './styles'

interface IconButtonProps extends TouchableOpacityProps {
  iconPath: ImageSourcePropType
  iconOnPress: () => void
}

export const IconButton: React.FC<IconButtonProps> = ({
  iconPath,
  iconOnPress,
  ...rest
}) => {
  return (
    <IconButtonContainer onPress={iconOnPress} {...rest}>
      <Image source={iconPath} />
    </IconButtonContainer>
  )
}
