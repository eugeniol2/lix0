import React, { useState } from 'react'
import { MainHeader, ScrollViewMissionItem } from '../../../components'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import { data } from '../../../services/mock'
import { TopFilterTab } from './topFilterTab'

export const ChooseMission: React.FC = () => {
  const [missionData, setMissionData] = useState(data)

  return (
    <>
      <SafeAreaView>
        <MainHeader text="Buscar Missão" />
      </SafeAreaView>
      <TopFilterTab setFilteredData={setMissionData} data={data} />
      <ScrollView style={{ padding: 8 }}>
        {missionData.map(item => {
          return (
            <ScrollViewMissionItem
              titulo={item.titulo}
              cep={item.cep}
              localidade={item.localidade}
              logradouro={item.logradouro}
              uf={item.uf}
              horario={item.horario}
              tipo={item.tipo}
              key={item.cep} // change to id
            />
          )
        })}
      </ScrollView>
    </>
  )
}
