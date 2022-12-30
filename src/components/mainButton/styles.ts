import styled, { css } from "styled-components/native";
import { TouchableOpacityProps } from "react-native";

export interface MainButtonProps extends TouchableOpacityProps {
  title: string;
  type?: "outlined" | "contained";
  color: string;
}

export const TouchableOpacityButton = styled.TouchableOpacity<MainButtonProps>`
  height: 40px;
  width: 100%;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ color }) => color};

  ${({ type, color }) =>
    type === "outlined" &&
    css`
      background: transparent;
      border: 1px;
      border-color: ${color};
    `};
`;

export const TouchableOpacityButtonTitle = styled.Text<MainButtonProps>`
  font-family: ${({ theme }) => theme.FONTS.intermedium};
  font-size: ${({ theme }) => theme.SIZES.font_14px};
  color: ${({ theme, type, color }) =>
    type === "outlined" ? color : theme.COLORS.white};
`;
