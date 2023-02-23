import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  padding: 0 16px 0 16px;
  flex-direction: column;
`
export const Header = styled.View`
  flex: 1;
  justify-content: center;
`
export const Body = styled.View`
  flex: 3;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`
export const BoldText = styled.Text`
  align-self: center;
  font-weight: bold;
  font-size: 18px;
  margin: 8px 0 8px 0;
`
export const RegularText = styled.Text``

export const Footer = styled.View`
  margin-top: 16px;
  margin-bottom: 16px;
`

export const IconButton = styled.TouchableOpacity`
  align-items: center;
`
