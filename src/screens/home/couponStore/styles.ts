import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 16px;
`
export const SearchBar = styled.TextInput`
  flex: 8;
  border-radius: 6px;
  padding: 8px 16px 8px 16px;
  height: 32px;
  border: 1px solid blue;
`

export const MyCouponsButton = styled.TouchableOpacity`
  flex: 3;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.COLORS.primary_600};
  border: 1px solid #28f5be;
  padding: 4px;
  border-radius: 6px;
  margin-left: 16px;
  height: 32px;
`

export const MyCouponsButtonText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.interbold};
  font-size: 10px;
`
