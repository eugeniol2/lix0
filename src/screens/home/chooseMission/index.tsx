import React from 'react'
import { MainHeader, ScrollViewMissionItem } from '../../../components'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'

export const ChooseMission = () => {
  return (
    <>
      <SafeAreaView>
        <MainHeader text="Ranking" />
      </SafeAreaView>
      <ScrollView style={{ padding: 8 }}>
        <>
          <ScrollViewMissionItem
            titulo="Descarte de alumínio"
            cep="132332132"
            localidade="dwadwdwa"
            logradouro="dasdsaads"
            uf="dsa"
            horario="8:00 AM - 17:00 PM"
            tipo="Descarte"
          />
        </>
      </ScrollView>
    </>
  )
}
