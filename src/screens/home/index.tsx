import { View, Text, Image } from "react-native";
import React from "react";
import {
  CustomImage,
  SafeAreaViewContainer,
  Name,
  CustomIcon,
  HomeProps,
  HomeSquareButtonsContainer,
  NavigationButtonsContainer,
  NavigationMenuSquare,
  UserInfoView,
  IconsView,
  HomeHeaderContainer,
  HomeBodyContainer,
} from "./styles";
import { ICONS, IMAGES } from "../../assets";
import { HomeNavigationBoxButton, HomeSquareButtons } from "../../components";

export const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <SafeAreaViewContainer>
        <HomeHeaderContainer>
          <UserInfoView>
            <CustomImage source={IMAGES.notRealPersonImage} />
            <Name>Jessica pereira</Name>
          </UserInfoView>
          <IconsView>
            <CustomIcon source={ICONS.BellIcon} />
            <CustomIcon source={ICONS.LogOutIcon} style={{ marginLeft: 16 }} />
          </IconsView>
        </HomeHeaderContainer>
        <HomeBodyContainer>
          <HomeSquareButtonsContainer>
            <HomeSquareButtons userPointsValue="1200" />
          </HomeSquareButtonsContainer>
          <NavigationButtonsContainer>
            <HomeNavigationBoxButton
              title="Missões"
              iconName={ICONS.StarSparkle}
            />
            <HomeNavigationBoxButton
              title="Coleta"
              iconName={ICONS.SearchHomeIcon}
            />
            <HomeNavigationBoxButton title="Cupons" iconName={ICONS.Coupon} />
            <HomeNavigationBoxButton title="Quiz" iconName={ICONS.Quiz} />
          </NavigationButtonsContainer>
        </HomeBodyContainer>
      </SafeAreaViewContainer>
      <View
        style={{
          height: 62,
          width: "100%",
          backgroundColor: "purple",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white" }}>TabBarDummy</Text>
      </View>
    </>
  );
};
