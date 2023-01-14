import { FieldError } from 'react-hook-form'
import styled, { css } from 'styled-components/native'
import MaskInput from 'react-native-mask-input'

interface InputProps {
  isFocused: boolean
  hasError?: FieldError | undefined
  isProfile?: boolean
}

interface ContainerProps {
  hasError: FieldError | undefined
  isProfile?: boolean
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  margin-bottom: 16px;

  ${({ hasError }) =>
    hasError != null &&
    css`
      margin-bottom: 8px;
    `};

  ${({ isProfile }) =>
    isProfile &&
    css`
      flex-direction: row;
      align-items: center;
    `}
`

export const LabelText = styled.Text<InputProps>`
  font-family: ${({ theme }) => theme.FONTS.intermedium};
  font-size: ${({ theme }) => theme.SIZES.small_12px};
  color: ${({ theme }) => theme.COLORS.gray_800};
  margin-bottom: 4px;

  ${({ isFocused }) =>
    isFocused &&
    css`
      color: ${({ theme }) => theme.COLORS.secondary_500};
    `};
`

export const Input = styled(MaskInput)<InputProps>`
  width: 100%;
  height: 41px;
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px ${({ theme }) => theme.COLORS.gray_600};
  border-bottom-color: ${({ isProfile, theme }) =>
    isProfile && theme.COLORS.gray_400};

  color: ${({ theme }) => theme.COLORS.gray_900};
  font-size: 12px;
  line-height: 18px;
  font-family: ${({ theme }) => theme.FONTS.intermedium};

  ${({ hasError }) =>
    hasError != null &&
    css`
      border-color: ${({ theme }) => theme.COLORS.auxiliary_red};
      border-bottom-color: ${({ theme }) => theme.COLORS.auxiliary_red};
    `};
  ${({ isFocused }) =>
    isFocused &&
    css`
      border-color: ${({ theme }) => theme.COLORS.secondary_500};
      border-bottom-color: ${({ theme }) => theme.COLORS.secondary_500};
    `};
  ${({ isProfile }) =>
    isProfile &&
    css`
      border: none;
      border-bottom-width: 1px;
      padding-left: 34px;
    `}
`

export const Error = styled.Text`
  color: ${({ theme }) => theme.COLORS.auxiliary_red};
`
