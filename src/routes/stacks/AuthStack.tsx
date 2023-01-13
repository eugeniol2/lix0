import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login, ForgotPassword, Register, Ranking } from "../../screens";
import { ROUTE } from "../../constants";
import { WelcomeScreen } from "../../screens/auth/welcomeScreen";

const { Navigator, Screen } = createStackNavigator();

export const AuthStack = () => {
  console.log(Navigator);
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={ROUTE.WELCOME_SCREEN}
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
      <Screen
        name={ROUTE.WELCOME_SCREEN}
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};
