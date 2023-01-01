import styled, { css } from "styled-components/native";

interface InputProps {
  isFocused: boolean;
}

export const Container = styled.View`
  width: 100%;
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

  ${({ isFocused }) =>
    isFocused &&
    css`
      border-color: ${({ theme }) => theme.COLORS.secondary_500};
    `};
`;
