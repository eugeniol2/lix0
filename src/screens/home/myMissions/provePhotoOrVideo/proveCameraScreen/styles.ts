import styled from 'styled-components/native'

export const BoldText = styled.Text`
  align-self: center;
  font-weight: bold;
  font-size: 18px;
  margin: 8px 0 8px 0;
`

export const ButtonAreaContainer = styled.View`
  align-items: center;
  justify-content: center;
`

export const TakePictureButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.gray_900};
  height: 40px;
  width: 100%;
  margin-top: 16px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`
