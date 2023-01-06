import { TouchableOpacityProps } from "react-native";
import styled, { css } from "styled-components/native";

export interface HomeProps extends TouchableOpacityProps {
  position: "left" | "right";
}

export const SquareButtonText = styled.TouchableOpacity<HomeProps>`
  height: 143px;
  width: 123px;
  justify-content: center;
  padding: 8px;

  ${({ position }) =>
    position === "right" &&
    css`
      border-top-right-radius: 16px;
      border-bottom-right-radius: 16px;
      align-items: flex-end;
      background: green;
    `};
  ${({ position }) =>
    position === "left" &&
    css`
      border-top-left-radius: 16px;
      border-bottom-left-radius: 16px;
      align-items: flex-start;
      background: blue;
    `};
`;

export const SquareButtonWrapper = styled.View`
  flex-direction: row;
`;

export const SquareText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.montserrato};
  font-size: ${({ theme }) => theme.SIZES.font_14px};
  font-weight: 700;
  color: white;
  margin-bottom: 8px;
`;

export const ShowPointsCircle = styled.View`
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 84px;
  height: 84px;
  background: white;
  border-radius: 64px;
  z-index: 99;
`;

export const ShowPointsCircleText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.montserrato};
  font-size: ${({ theme }) => theme.SIZES.font_14px};
  font-weight: 700;
`;

export const SquareButtonContent = styled.View`
  justify-content: space-between;
  align-items: center;
`;
