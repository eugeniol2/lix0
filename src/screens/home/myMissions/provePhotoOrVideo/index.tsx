import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { MainHeader } from '../../../../components'
import IonIcons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import {
  Body,
  BoldText,
  Container,
  Header,
  IconButton,
  RegularText
} from './styles'

export const ProvePhotoOrVideo: React.FC = () => {
  const navigation = useNavigation()

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <MainHeader text="Comprovar missão" />
        <Container>
          <Header>
            <BoldText style={{ fontSize: 32 }}>Instruções</BoldText>
            <RegularText>
              Para comprovar a missão você deve primeiro escolher foto ou vídeo,
              o processo é simples, basta fotografar ou gravar o seu resultado,
              a depender da missão, ou comprovante se for uma missão de
              encaminhamento de resíduos.
            </RegularText>
          </Header>
          <Body>
            <IconButton
              onPress={() => {
                navigation.navigate('ProveCameraScreen')
              }}
            >
              <IonIcons name="camera-outline" size={120} color="black" />
              <BoldText>Foto</BoldText>
            </IconButton>
            <IconButton onPress={() => {}}>
              <IonIcons name="videocam-outline" size={120} color="black" />
              <BoldText>Vídeo</BoldText>
            </IconButton>
          </Body>
        </Container>
      </SafeAreaView>
    </>
  )
}
