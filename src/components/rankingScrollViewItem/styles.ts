import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 8px;
  margin-top: 12px;
  width: 100%;
  border-radius: 8px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.gray_200};

`

export const CustomImage = styled.View`
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 32px;
  margin-right: 8px;
  background: ${({ theme }) => theme.COLORS.primary_500};
`

export const Content = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 8px;
`

export const TextContainer = styled.View``

export const CustomText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.intermedium};
`
