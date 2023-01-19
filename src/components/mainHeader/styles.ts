import styled from 'styled-components/native'
import { IconButton } from '../iconButton'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  background: ${({ theme }) => theme.COLORS.secondary_500};
`

export const HeaderIcon = styled(IconButton)`
  position: absolute;
  justify-content: flex-end;
  margin-left: 16px;
  transform: translateY(4px);
`
export const HeaderText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.interbold};
  font-size: ${({ theme }) => theme.SIZES.extraLarge_24px};
  color: ${({ theme }) => theme.COLORS.white};
`
