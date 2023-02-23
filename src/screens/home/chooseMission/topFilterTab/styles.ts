import { TouchableHighlightProps } from 'react-native'
import styled, { css } from 'styled-components/native'

interface OptionItemProps extends TouchableHighlightProps {
  activeButton: string
  buttonName: string
}

export const Container = styled.View`
  margin: 16px 16px 0 16px;
`

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  margin-top: 8px;
`

export const OptionItem = styled.TouchableOpacity<OptionItemProps>`
  border-radius: 16px;
  padding: 8px;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.COLORS.primary_500};
  ${({ activeButton, buttonName }) =>
    activeButton === buttonName &&
    css`
      background: ${({ theme }) => theme.COLORS.primary_500};
    `};
`

export const OptionText = styled.Text<OptionItemProps>`
  color: white;
  color: ${({ theme, activeButton, buttonName }) =>
    activeButton === buttonName ? theme.COLORS.white : theme.COLORS.gray_900};
`