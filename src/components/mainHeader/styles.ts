import styled from 'styled-components/native'
import { IconButton } from '../iconButton'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 48px;
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

export const PointsBox = styled.View`
  position: absolute;
  flex-direction: row;
  align-items: center;
  background: ${({ theme }) => theme.COLORS.primary_300};
  right: 0;
  margin-right: 20px;
  padding: 4px;
  border-radius: 4px;
  border: 1px ${({ theme }) => theme.COLORS.primary_500};
`
