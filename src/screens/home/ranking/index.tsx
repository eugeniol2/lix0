import React from 'react'
import { SafeAreaViewContainer } from './styles'
import { ScrollViewMissionItem } from '../../../components'

export const Ranking = () => {
  return (
    <SafeAreaViewContainer>
      <ScrollViewMissionItem localidade="Praça da Sé" uf='SP' logradouro="São paulo" cep='01001-000'/>
    </SafeAreaViewContainer>
  )
}
