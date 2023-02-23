import { TouchableOpacityProps } from 'react-native'
import styled, { css } from 'styled-components/native'

interface CustomButtonProps extends TouchableOpacityProps {
  isActive?: boolean
}
export const Container = styled.View`
  height: 48px;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.secondary_500};
`

export const CustomButton = styled.TouchableOpacity<CustomButtonProps>`
  width: 50%;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.COLORS.white};
  border-top-right-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.secondary_500};
  ${({ isActive }) =>
    isActive &&
    css`
      color: ${({ theme }) => theme.COLORS.gray_900};
      background: #f3f3f3;
      border-top-left-radius: 8px;
    `};
`

export const CustomText = styled.Text<CustomButtonProps>`
  font-family: ${({ theme }) => theme.FONTS.montserratRegular};
  font-size: 24px;
  color: ${({ theme }) => theme.COLORS.white};
  ${({ isActive }) =>
    isActive &&
    css`
      color: ${({ theme }) => theme.COLORS.gray_900};
    `};
`