import { ImageSourcePropType, StyleSheet, Text, TouchableOpacityProps, View } from 'react-native'
import React from 'react'
import { Container, HeaderIcon, HeaderText } from './styles'
import { ICONS } from '../../assets'
import { useNavigation } from '@react-navigation/native';
import { IconButtonProps } from 'react-native-vector-icons/Icon';


interface MainHeaderProps extends TouchableOpacityProps{
  text: string;
  
  
}

export const MainHeader:React.FC<MainHeaderProps>= ({text, ...rest}) => {
  const navigation = useNavigation()

  return (
    <Container {...rest}>
      <HeaderIcon style={{left: 0}} iconPath={ICONS.navBack} iconOnPress={() => {navigation.goBack()}} {...rest}/>
      <HeaderText>{text}</HeaderText>
    </Container>
  )
}



