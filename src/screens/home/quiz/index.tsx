import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { QuizImages } from '../../../assets'
import { MainHeader } from '../../../components'
import { userData } from '../../../services/mock'
import { QuizCard } from './quizCard'

export const Quiz: React.FC = () => {
  const navigation = useNavigation()

  const handleCardOnPress = () => {
    navigation.navigate('Questionary')
  }

  return (
    <SafeAreaView>
      <MainHeader text="Quiz" />
      <ScrollView
        contentContainerStyle={{
          justifyContent: 'space-around',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}
        style={{ padding: 16 }}
      >
        <QuizCard
          isCompleted={userData.quizScore.fossil}
          iconPath={QuizImages.fossil}
          description={'12.c - Combustíveis fósseis'}
          onPress={() => {
            handleCardOnPress()
          }}
        />
        <QuizCard
          isCompleted={userData.quizScore.chemical}
          iconPath={QuizImages.chemical}
          description={'12.4 - Manejo sustentável dos produtos químicos'}
          onPress={() => {}}
        />
        <QuizCard
          isCompleted={userData.quizScore.manage}
          iconPath={QuizImages.manage}
          description={'12.2 - Gestão Sustentável'}
          onPress={() => {}}
        />
        <QuizCard
          isCompleted={userData.quizScore.residues}
          iconPath={QuizImages.residues}
          description={'12.5 - Reduzir geração de resíduos'}
          onPress={() => {}}
        />
        <QuizCard
          isCompleted={userData.quizScore.sustainable}
          iconPath={QuizImages.sustainable}
          description={
            '12.6 - Incentivar as empresas para práticas sustentáveis'
          }
          onPress={() => {}}
        />
        <QuizCard
          isCompleted={userData.quizScore.sustainableCountry}
          iconPath={QuizImages.sustainableCountry}
          description={'12.a - Apoiar países em desenvolvimento sustentavel'}
          onPress={() => {}}
        />
        <QuizCard
          isCompleted={userData.quizScore.sustainableShopping}
          iconPath={QuizImages.sustainableShopping}
          description={'12.7 - Compras públicas sustentáveis'}
          onPress={() => {}}
        />
        <QuizCard
          isCompleted={userData.quizScore.turism}
          iconPath={QuizImages.turism}
          description={'12.b - Turismo Sustentável'}
          onPress={() => {}}
        />
      </ScrollView>
    </SafeAreaView>
  )
}
