import styled from "styled-components/native";
import { theme } from "../../constants";
import { Image } from "react-native";
1;

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;

  padding: 8px;
  margin-bottom: 16px;
  width: 100%;
  height: 80px;

  background: ${({ theme }) => theme.COLORS.gray_100};
  border-radius: 8px;
`;

export const CustomImage = styled(Image)`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  margin-right: 8px;
`;

export const Content = styled.View``;
export const CustomText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.intermedium};
`;
