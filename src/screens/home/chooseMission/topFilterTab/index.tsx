import { Text } from 'react-native'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { Container, Content, OptionItem, OptionText } from './styles'
import { missionDataProps } from '../../../../services/mock'

interface topFilterTabProps {
  data: missionDataProps[]
  setFilteredData: Dispatch<SetStateAction<missionDataProps[]>>
}

export const TopFilterTab: React.FC<topFilterTabProps> = ({
  data,
  setFilteredData
}) => {
  const [activeButton, setActiveButton] = useState('Todos')
  const buttons = ['Todos', 'Descarte', 'Tratamento', 'Quiz']

  const handleOptionButtonClick = (name: string) => {
    setActiveButton(name)
    setFilteredData(data)
    if (name === 'Todos') {
      return
    }
    const missionFilter = data.filter(data => data.tipo === name)
    setFilteredData(missionFilter)
  }

  return (
    <Container>
      <Text style={{ fontWeight: '700', fontSize: 16 }}>Categorias</Text>
      <Content>
        {buttons.map(buttonName => (
          <OptionItem
            key={buttonName}
            activeButton={activeButton}
            buttonName={buttonName}
            onPress={() => {
              handleOptionButtonClick(buttonName)
            }}
          >
            <OptionText activeButton={activeButton} buttonName={buttonName}>
              {buttonName}
            </OptionText>
          </OptionItem>
        ))}
      </Content>
    </Container>
  )
}
