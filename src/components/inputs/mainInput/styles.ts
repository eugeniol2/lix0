import { FieldError } from "react-hook-form";
import styled, { css } from "styled-components/native";
import { theme } from "../../../constants";

interface InputProps {
  isFocused: boolean;
  hasError?: FieldError | undefined;
}

interface ContainerProps {
  hasError: FieldError | undefined;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  margin-bottom: 16px;
  ${({ hasError }) =>
    hasError &&
    css`
      margin-bottom: 8px;
    `};
`;

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
`;

export const Input = styled.TextInput<InputProps>`
  width: 100%;
  height: 41px;
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px ${({ theme }) => theme.COLORS.gray_600};
  ${({ hasError }) =>
    hasError &&
    css`
      border-color: ${({ theme }) => theme.COLORS.auxiliary_red};
    `};
  ${({ isFocused }) =>
    isFocused &&
    css`
      border-color: ${({ theme }) => theme.COLORS.secondary_500};
    `};
`;

export const Error = styled.Text`
  color: ${({ theme }) => theme.COLORS.auxiliary_red};
`;
