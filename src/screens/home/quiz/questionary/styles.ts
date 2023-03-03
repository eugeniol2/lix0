import styled from 'styled-components/native'

export const QuestionsContainer = styled.View`
  width: 100%;
`

export const ImageContainer = styled.View`
  height: 200px;
  margin-bottom: 10%;
`
export const TextContainer = styled.View`
  width: 80%;
`

export const CustomText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.montserratBold};
  font-size: 14px;
`

export const PageCounter = styled.Text`
  position: absolute;
  right: 0;
`

export const FinishContainer = styled.View`
  position: absolute;
  align-items: center;
  width: 100%;
  top: 200px;
`
