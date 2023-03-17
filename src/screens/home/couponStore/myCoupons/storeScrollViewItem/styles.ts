import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  height: 160px;
  border: 1px solid ${({ theme }) => theme.COLORS.primary_300};
  border-radius: 4px;
  margin-bottom: 16px;
`
export const Photo = styled.Image`
  flex: 1;
  height: 100%;
  border-radius: 4px;
  margin-right: 8px;
  background-color: ${({ theme }) => theme.COLORS.primary_100};
`

export const DescriptionContainer = styled.View`
  flex: 1.5;
  padding: 8px;
  justify-content: space-between;
`

export const InformationsContainer = styled.View``

export const FooterContainer = styled.View`
  margin-top: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const PriceContainer = styled.View`
  flex-direction: row;
  height: 100%;
  align-items: center;
`

export const CustomText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.interbold};
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.gray_900};
`

export const BuyButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.COLORS.primary_600};
  border: 1px solid #28f5be;
  align-self: flex-end;
  height: 32px;
  padding: 4px;
  border-radius: 6px;
`

export const BuyButtonText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.interbold};
  font-size: 10px;
`
