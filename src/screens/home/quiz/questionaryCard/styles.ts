import styled from 'styled-components/native'
import { QuestionaryCardProps } from '.'

export const Container = styled.TouchableOpacity<QuestionaryCardProps>`
  border: 1px solid ${({ theme }) => theme.COLORS.gray_600};
  border-radius: 12px;
  width: 100%;
  padding: 16px;
  margin-bottom: 16px;
  background-color: ${({ theme, correctAnswer, choosedAnswer }) =>
    correctAnswer === choosedAnswer
      ? theme.COLORS.primary_500
      : theme.COLORS.gray_100};
`

export const CustomText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.montserratMedium};
  color: ${({ theme }) => theme.COLORS.gray_700};
  font-size: 12px;
`
