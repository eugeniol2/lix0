import styled from 'styled-components/native'

interface isUsedProps {
  isUsed: boolean
}

export const Container = styled.TouchableOpacity<isUsedProps>`
  flex-direction: row;
  border: 1px solid;
  border-color: ${({ theme, isUsed }) =>
    isUsed ? theme.COLORS.primary_300 : theme.COLORS.red_500};
  border-radius: 4px;
  color: red;
  justify-content: space-between;
  align-items: center;
  margin: 16px 16px 0 16px;
  height: 48px;
`

export const PriceWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
`

export const CustomText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.interbold};
  color: ${({ theme }) => theme.COLORS.primary_600};
  font-size: 16px;
`

export const PhotoBackground = styled.View<isUsedProps>`
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, isUsed }) =>
    isUsed ? theme.COLORS.primary_100 : theme.COLORS.red_100};
  height: 100%;
  width: 15%;
`

export const Photo = styled.Image`
  right: 0;
`
