import { Text } from 'react-native'
import React, { Dispatch, SetStateAction } from 'react'
import { Container, Content, OptionItem, OptionText } from './styles'
import { missionDataProps } from '../../../../services/mock'

interface topFilterTabProps {
  data: missionDataProps[]
  setFilteredData: Dispatch<SetStateAction<missionDataProps[]>>
  setActiveButton: Dispatch<SetStateAction<string>>
  activeButton: string
}

export const TopFilterTab: React.FC<topFilterTabProps> = ({
  setActiveButton,
  activeButton
}) => {
  const buttons = ['Todos', 'Descarte', 'Tratamento', 'Quiz']

  const handleOptionButtonClick = (name: string) => {
    setActiveButton(name)
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
