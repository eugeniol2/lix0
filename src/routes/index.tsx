import React from "react";
import { useAuth } from "../context/authProvider/useAuth";
import { AuthStack } from "./stacks/AuthStack";
import { TabNavigator } from "./stacks/TabNavigator";

export const Routes = () => {
  const auth = useAuth();

  if (auth.email) {
    // !auth.email;
    return <AuthStack />;
  }

  return <TabNavigator />;
};
