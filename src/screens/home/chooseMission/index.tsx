import React, { useState } from 'react'
import { MainHeader, ScrollViewMissionItem } from '../../../components'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import { data, missionDataProps } from '../../../services/mock'
import { TopFilterTab } from './topFilterTab'
import { useNavigation } from '@react-navigation/native'

export const ChooseMission: React.FC = () => {
  const [missionData, setMissionData] = useState<missionDataProps[]>(data)
  const navigation = useNavigation()

  return (
    <>
      <SafeAreaView>
        <MainHeader text="Buscar Missão" />
      </SafeAreaView>
      <TopFilterTab setFilteredData={setMissionData} data={data} />
      <ScrollView style={{ padding: 8 }}>
        {missionData.map(mission => {
          return (
            <ScrollViewMissionItem
              titulo={mission.titulo}
              cep={mission.cep}
              localidade={mission.localidade}
              logradouro={mission.logradouro}
              uf={mission.uf}
              horario={mission.horario}
              tipo={mission.tipo}
              key={mission.cep} // change to id
              onPress={() => {
                navigation.navigate('MissionDetails', { mission })
              }}
            />
          )
        })}
      </ScrollView>
    </>
  )
}
