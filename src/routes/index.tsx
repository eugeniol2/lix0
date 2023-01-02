import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { AuthNavigator, AppNavigator } from "./stacks";

import { StyleSheet, Text, View } from "react-native";
import React from "react";

export const Routes = () => {
  return (
    <NavigationContainer>
      {/* {isAuthenticated ? <AuthNavigator /> : AppNavigator} */}
      {/* <AppNavigator /> */}
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default Routes;
