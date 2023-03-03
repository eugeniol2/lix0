import React, { useState } from 'react'
import { ScrollView, Text, Image, Alert, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ICONS } from '../../../../assets'
import { MainHeader } from '../../../../components'
import { quizData } from '../../../../services/mock'
import { QuestionaryCard } from '../questionaryCard'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import {
  CustomText,
  FinishContainer,
  ImageContainer,
  PageCounter,
  QuestionsContainer,
  TextContainer
} from './styles'
import { theme } from '../../../../constants'

export const Questionary: React.FC = () => {
  const [page, setPage] = useState(0)
  const [isDisabled, setIsDisabled] = useState(false)
  const [choosedAnswer, setChoosedAnswer] = useState('')
  const isCurrentPageNotNull = quizData.questions[page] !== undefined
  const currentQuizPage = quizData.questions[page]

  const handleQuestionaryCardOnPress = (answer: string) => {
    const correctAnswer = quizData.questions[page].corretAnswer
    const isCorrectAnswer = correctAnswer === answer
    if (isCorrectAnswer && !isDisabled) {
      setChoosedAnswer(correctAnswer)
      setIsDisabled(true)
      setTimeout(() => {
        setPage(page => page + 1)
        setChoosedAnswer('')
        setIsDisabled(false)
      }, 1300)
    } else {
      Alert.alert(
        'Alternativa incorreta :(',
        `A resposta correta seria "${correctAnswer}"`,
        [
          {
            text: 'Prosseguir',
            onPress: () => {
              setPage(page => page + 1)
              setChoosedAnswer('')
              setIsDisabled(false)
            }
          }
        ]
      )
    }
  }
  return (
    <SafeAreaView>
      <MainHeader text="Quiz" />
      {isCurrentPageNotNull ? (
        <ImageContainer>
          <Image
            source={ICONS.Quiz}
            resizeMode="contain"
            style={{ width: '100%', height: '100%', borderRadius: 32 }}
          />
        </ImageContainer>
      ) : null}
      {isCurrentPageNotNull ? (
        <ScrollView
          contentContainerStyle={{
            flexWrap: 'wrap'
          }}
          style={{ padding: 16, flexDirection: 'column' }}
        >
          <QuestionsContainer>
            <TextContainer>
              <CustomText style={{ marginBottom: 16 }}>
                {currentQuizPage.question}
              </CustomText>
            </TextContainer>
            {currentQuizPage.answers.map(possibleAnswers => (
              <QuestionaryCard
                key={possibleAnswers}
                correctAnswer={possibleAnswers}
                choosedAnswer={choosedAnswer}
                onPress={() => {
                  handleQuestionaryCardOnPress(possibleAnswers)
                }}
              >
                <Text key={possibleAnswers}>{possibleAnswers}</Text>
              </QuestionaryCard>
            ))}
            <PageCounter>{`${page + 1}/${
              quizData.questions.length + 1
            }`}</PageCounter>
          </QuestionsContainer>
        </ScrollView>
      ) : (
        <FinishContainer>
          <CustomText
            style={{
              fontSize: 32
            }}
          >
            Parabêns
          </CustomText>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <CustomText
              style={{ fontSize: 16, marginTop: 32, marginBottom: 16 }}
            >
              Parabêns você acertou 5 de 10 perguntas
            </CustomText>
            <FontAwesome5
              name="glass-cheers"
              size={120}
              color={theme.COLORS.secondary_600}
            />
          </View>
        </FinishContainer>
      )}
    </SafeAreaView>
  )
}
