import React from "react";
import { useAuth } from "../context/authProvider/useAuth";
import { AppNavigator } from "./stacks/AppNavigator";
import { AuthNavigator } from "./stacks/AuthNavigator";

export const Routes = () => {
  const auth = useAuth();

  if (auth.email) {
    // (!auth.email)
    return <AuthNavigator />;
  }

  return <AppNavigator />;
};
