import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { Container, CustomText } from './styles'

export interface QuestionaryCardProps extends TouchableOpacityProps {
  children: JSX.Element
  correctAnswer: string | undefined
  choosedAnswer: string | undefined
}

export const QuestionaryCard: React.FC<QuestionaryCardProps> = ({
  children,
  correctAnswer,
  choosedAnswer,
  ...rest
}) => {
  return (
    <Container
      {...rest}
      correctAnswer={correctAnswer}
      choosedAnswer={choosedAnswer}
    >
      <CustomText>{children}</CustomText>
    </Container>
  )
}
