import styled from "styled-components/native";
import { ImageSourcePropType, TouchableOpacityProps } from "react-native";

export interface HomeNavigationBoxButtonProps extends TouchableOpacityProps {
  title?: string;
  iconName?: ImageSourcePropType;
}

export const NavigationMenuSquare = styled.TouchableOpacity<HomeNavigationBoxButtonProps>`
  width: 184px;
  height: 134px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  border-color: ${({ theme }) => theme.COLORS.gray_300};
`;

export const CustomText = styled.Text<HomeNavigationBoxButtonProps>`
  font-family: ${({ theme }) => theme.FONTS.intermedium};
  font-size: ${({ theme }) => theme.SIZES.font_14px};
`;
