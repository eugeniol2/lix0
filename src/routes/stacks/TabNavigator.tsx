import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Home, Profile, Ranking } from "../../screens";
import { ROUTE } from "../../constants";
import { HomeStack } from "./HomeStack";
import { AuthStack } from "./AuthStack";

const { Navigator, Screen } = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      // initialRouteName={ROUTE.HOME}
    >
      <Screen name="Home" component={HomeStack} />
      <Screen name="Profile" component={Profile} />
    </Navigator>
  );
};
