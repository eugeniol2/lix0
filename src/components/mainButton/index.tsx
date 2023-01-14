import {
  TouchableOpacityButton,
  TouchableOpacityButtonTitle,
  MainButtonProps
} from './styles'
import React from 'react'

export const MainButton: React.FC<MainButtonProps> = ({
  title,
  type,
  color,
  ...rest
}) => {
  return (
    <TouchableOpacityButton {...rest} type={type} color={color} title={title}>
      <TouchableOpacityButtonTitle type={type} color={color} title={title}>
        {title}
      </TouchableOpacityButtonTitle>
    </TouchableOpacityButton>
  )
}
