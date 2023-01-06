import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ROUTE } from "../../constants";
import { Home } from "../../screens";
import { Profile } from "../../screens/home/profile";

const { Navigator, Screen } = createStackNavigator();

export const AppNavigator: React.FC = () => {
  console.log(Navigator);
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={ROUTE.HOME}
    >
      <Screen name={ROUTE.HOME} component={Home} />
      <Screen name={ROUTE.PROFILE} component={Profile} />
    </Navigator>
  );
};
