import React, { useState } from 'react'
import { MainHeader, ScrollViewMissionItem } from '../../../components'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import { data, missionDataProps } from '../../../services/mock'
import { TopFilterTab } from './topFilterTab'
import { useNavigation } from '@react-navigation/native'
import { useAtom } from 'jotai'
import { singleMissionAtom } from '../../../atoms/missionAtom'

export const ChooseMission: React.FC = () => {
  const navigation = useNavigation()
  const [sourceData, setSourceData] = useState<missionDataProps[]>(data)
  const [, setMission] = useAtom(singleMissionAtom)
  const [activeFilterButton, setActiveFilterButton] = useState('Todos')

  return (
    <>
      <SafeAreaView>
        <MainHeader text="Buscar Missão" />
      </SafeAreaView>
      <TopFilterTab
        setFilteredData={setSourceData}
        data={data}
        activeButton={activeFilterButton}
        setActiveButton={setActiveFilterButton}
      />
      <ScrollView style={{ padding: 8 }}>
        {activeFilterButton !== 'Todos'
          ? sourceData
              ?.filter(filterItem => filterItem.tipo === activeFilterButton)
              .map(item => {
                return (
                  <ScrollViewMissionItem
                    titulo={item.titulo}
                    cep={item.cep}
                    localidade={item.localidade}
                    logradouro={item.logradouro}
                    uf={item.uf}
                    horario={item.horario}
                    tipo={item.tipo}
                    key={item.id} // change to id
                    onPress={() => {
                      setMission(item)
                      navigation.navigate('MissionDetails')
                    }}
                  />
                )
              })
          : sourceData?.map(item => {
              return (
                <ScrollViewMissionItem
                  titulo={item.titulo}
                  cep={item.cep}
                  localidade={item.localidade}
                  logradouro={item.logradouro}
                  uf={item.uf}
                  horario={item.horario}
                  tipo={item.tipo}
                  key={item.id} // change to id
                  onPress={() => {
                    setMission(item)
                    navigation.navigate('MissionDetails')
                  }}
                />
              )
            })}
      </ScrollView>
    </>
  )
}