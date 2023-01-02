import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login, ForgotPassword, Register } from "../../screens";
import { ROUTE } from "../../constants";

const { Navigator, Screen } = createStackNavigator();

export const AuthNavigator = () => {
  console.log(Navigator);
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={ROUTE.LOGIN}
    >
      <Screen name={ROUTE.LOGIN} component={Login} />
      <Screen
        name={ROUTE.REGISTER}
        component={Register}
        options={{ headerShown: false }}
      />
      <Screen
        name={ROUTE.FORGOT_PASSWORD}
        component={ForgotPassword}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};
