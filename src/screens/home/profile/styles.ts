import styled from 'styled-components/native'
import { SafeAreaView as CustomSafeAreaView } from 'react-native-safe-area-context'
import { CustomImage } from '../styles'

export const SafeAreaViewContainer = styled(CustomSafeAreaView)`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  padding: 0 16px 0 16px;
  
`

export const CustomImageProfile = styled(CustomImage)`
  width: 163px;
  height: 163px;
  border-radius: 999px;
`

export const HeaderContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`

export const ProfileFormContainer = styled.View`
  margin: 24px 0 24px 0;
  width: 100%;
`

export const ProfileFooter = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`
