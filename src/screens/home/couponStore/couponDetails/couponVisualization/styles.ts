import styled from 'styled-components/native'

export const Body = styled.View`
  flex: 1;
  margin: 16px 16px 0 16px;
`
export const Wrapper = styled.View``
export const ImageContainer = styled.View`
  align-items: center;
  justify-content: center;
  background-color: #d2fade;
  border-radius: 16px;
  margin-bottom: 8px;
`
export const DetailsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const CustomText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.interbold};
  font-size: 32px;
  color: ${({ theme }) => theme.COLORS.gray_900};
`

export const PriceWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
export const PartnersContainer = styled.View`
  margin-top: 36px;
`
export const PartnersBox = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #d2fade;
  margin-top: 16px;
  border-radius: 16px;
  height: 275px;
`

export const GoBackButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.COLORS.primary_600};
  padding: 4px;
  border-radius: 6px;
  margin-top: 16px;
  height: 48px;
`
