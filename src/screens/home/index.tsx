import React from "react";
import { View, Text } from "react-native";
import { ICONS, IMAGES } from "../../assets";
import {
  HomeNavigationBoxButton,
  HomeDashBoard,
  IconButton,
} from "../../components";
import {
  CustomImage,
  SafeAreaViewContainer,
  Name,
  NavigationButtonsContainer,
  UserInfoView,
  IconsView,
  HomeHeaderContainer,
  HomeBodyContainer,
  HomeDashBoardContainer,
} from "./styles";

export const Home: React.FC = () => {
  return (
    <>
      <SafeAreaViewContainer>
        <HomeHeaderContainer>
          <UserInfoView>
            <CustomImage source={IMAGES.notRealPersonImage} />
            <Name>Jessica pereira</Name>
          </UserInfoView>
          <IconsView>
            <IconButton
              iconOnPress={() => {
                console.log("Bell icon pressed");
              }}
              iconPath={ICONS.BellIcon}
            />
            <IconButton
              iconOnPress={() => {
                console.log("LogOut icon pressed");
              }}
              iconPath={ICONS.LogOutIcon}
              style={{ marginLeft: 16 }}
            />
          </IconsView>
        </HomeHeaderContainer>
        <HomeBodyContainer>
          <HomeDashBoardContainer>
            <HomeDashBoard
              userPointsValue="1200"
              leftButtonOnPress={() => {
                console.log("left button pressed");
              }}
              rightButtonOnPress={() => {
                console.log("right button pressed");
              }}
            />
          </HomeDashBoardContainer>
          <NavigationButtonsContainer>
            <HomeNavigationBoxButton
              title="Missões"
              onPress={() => {
                console.log("missões");
              }}
              iconName={ICONS.StarSparkle}
            />
            <HomeNavigationBoxButton
              title="Coleta"
              onPress={() => {
                console.log("Coleta");
              }}
              iconName={ICONS.SearchHomeIcon}
            />
            <HomeNavigationBoxButton
              title="Cupons"
              iconName={ICONS.Coupon}
              onPress={() => {
                console.log("Cupons");
              }}
            />

            <HomeNavigationBoxButton
              title="Quiz"
              iconName={ICONS.Quiz}
              onPress={() => {
                console.log("Quiz");
              }}
            />
          </NavigationButtonsContainer>
        </HomeBodyContainer>
      </SafeAreaViewContainer>
      {/* <View
        style={{
          height: 62,
          width: "100%",
          backgroundColor: "purple",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white" }}>TabBarDummy</Text>
      </View> */}
    </>
  );
};
