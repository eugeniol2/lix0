import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { MainButton, MainHeader } from '../../../../components'
import { theme } from '../../../../constants'
import { useAtom } from 'jotai/react'
import { Alert } from 'react-native'
import {
  removeMissionAtom,
  singleMissionAtom
} from '../../../../atoms/missionAtom'
import { useNavigation } from '@react-navigation/native'
import {
  Body,
  BoldText,
  Container,
  Footer,
  Header,
  RegularText
} from './styles'

export const MyMissionDetails: React.FC = () => {
  const navigation = useNavigation()
  const [mission] = useAtom(singleMissionAtom)
  const [, setRemoveMission] = useAtom(removeMissionAtom)
  const confirmAbandonMission = () => {
    Alert.alert('Confirmação', 'Realmente deseja abandonar essa missão?', [
      {
        text: 'Sim',
        onPress: () => {
          setRemoveMission(mission.id)
          navigation.goBack()
        }
      },
      {
        text: 'Não',
        onPress: () => {}
      }
    ])
  }

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <MainHeader text="Detalhes da missão" />
        <Container>
          <Header>
            <BoldText style={{ fontSize: 32 }}>{mission.titulo}</BoldText>
            <RegularText>{mission.descricao}</RegularText>
          </Header>
          <Body>
            <BoldText>Detalhes sobre o ponto de entrega:</BoldText>
            <BoldText>Endereço completo:</BoldText>
            <RegularText>{mission.details.endereco}</RegularText>

            <RegularText style={{ textDecorationLine: 'underline' }}>
              Ver localização por GPS
            </RegularText>
            <BoldText>Infraestrutura:</BoldText>
            <RegularText>
              Possui estacionamento ?
              {mission.details.estacionamento ? ' sim' : ' não'}
            </RegularText>
            <RegularText>
              Faz coleta em casa ?
              {mission.details.coletaemcasa ? ' sim' : ' não'}
            </RegularText>
            {mission.details.contato !== null ||
            mission.details.website !== null ? (
              <>
                <BoldText>Contato:</BoldText>
                <RegularText>Telefone: {mission.details.contato}</RegularText>
                <RegularText>Website: {mission.details.website}</RegularText>
              </>
            ) : null}
          </Body>
          <Footer>
            <MainButton
              style={{ marginBottom: 12 }}
              type="contained"
              title="Comprovar missão"
              color={theme.COLORS.primary_500}
              onPress={() => {
                navigation.navigate('ProvePhotoOrVideo')
              }}
            />
            <MainButton
              type="outlined"
              title="Abandonar missão"
              color={theme.COLORS.auxiliary_red}
              onPress={confirmAbandonMission}
            />
          </Footer>
        </Container>
      </SafeAreaView>
    </>
  )
}
