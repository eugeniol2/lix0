import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ROUTE } from "../../constants";
import { Home } from "../../screens";

const { Navigator, Screen } = createStackNavigator();

export const AppNavigator = () => {
  console.log(Navigator);
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={ROUTE.HOME}
    >
      <Screen name={ROUTE.HOME} component={Home} />
    </Navigator>
  );
};
