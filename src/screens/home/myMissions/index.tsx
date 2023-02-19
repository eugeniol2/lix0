import React, { useState } from 'react'
import { MainHeader, ScrollViewMissionItem } from '../../../components'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import { TopTabNavigation } from '../../../components/topTabNavigation'
import { useAtom } from 'jotai/react'
import { myMissionsAtom, singleMissionAtom } from '../../../atoms/missionAtom'
import { useNavigation } from '@react-navigation/native'

export const MyMissions: React.FC = () => {
  const navigation = useNavigation()
  const [isActive, setIsActive] = useState(false)
  const [isInProgress, setIsInProgress] = useState(false)
  const [, setMission] = useAtom(singleMissionAtom)
  const [myMissions] = useAtom(myMissionsAtom)

  const handleLeftButtonClick = () => {
    setIsActive(true)
    setIsInProgress(() => true)
  }

  const handleRightButtonClick = () => {
    setIsActive(false)
    setIsInProgress(false)
  }

  return (
    <>
      <SafeAreaView>
        <MainHeader text="Minhas missões" />
        <TopTabNavigation
          leftButtonName="Em progresso"
          leftButtonClick={handleLeftButtonClick}
          rightButtonName="Confirmado"
          rightButtonClick={handleRightButtonClick}
          isActive={isActive}
        />
      </SafeAreaView>
      {myMissions ? (
        <>
          <ScrollView style={{ padding: 8 }}>
            {myMissions
              .filter(mission => mission.emProgresso === isInProgress)
              .map(mission => {
                return (
                  <ScrollViewMissionItem
                    titulo={mission.titulo}
                    cep={mission.cep}
                    localidade={mission.localidade}
                    logradouro={mission.logradouro}
                    uf={mission.uf}
                    horario={mission.horario}
                    tipo={mission.tipo}
                    key={mission.id}
                    onPress={() => {
                      setMission(mission)
                      navigation.navigate('MyMissionDetails')
                    }}
                  />
                )
              })}
          </ScrollView>
        </>
      ) : null}
    </>
  )
}
