import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  width: 40%;
  padding: 8px;
  margin-bottom: 16px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.gray_100};
`
export const ImageContainer = styled.View``

export const TextContainer = styled.Text`
  margin-top: 8px;
  font-family: ${({ theme }) => theme.FONTS.montserratRegular};
`

export const CheckBoxContainer = styled.View`
  position: absolute;
  padding: 8px;
  right: 0;
  top: 0;
`
