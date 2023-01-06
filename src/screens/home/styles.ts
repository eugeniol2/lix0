import styled from "styled-components/native";
import { Image } from "react-native";
import { SafeAreaView as CustomSafeAreaView } from "react-native-safe-area-context";

export const SafeAreaViewContainer = styled(CustomSafeAreaView)`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
`;

export const HomeHeaderContainer = styled.View`
  width: 100%;
  padding: 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-color: ${({ theme }) => theme.COLORS.gray_300};
  border-bottom-width: 1px;
`;

export const UserInfoView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CustomImage = styled(Image)`
  width: 64px;
  height: 64px;
  border-radius: 32px;
`;

export const Name = styled.Text`
  padding-left: 8px;
  font-family: ${({ theme }) => theme.FONTS.intermedium};
`;

export const IconsView = styled.View`
  flex-direction: row;
`;

export const HomeBodyContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const HomeDashBoardContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const NavigationButtonsContainer = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  margin: 0 16px 72px 16px;
`;

export const NavigationMenuSquare = styled.TouchableOpacity`
  width: 184px;
  height: 134px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  background: sandybrown;
`;
