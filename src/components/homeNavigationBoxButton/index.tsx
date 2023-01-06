import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { CustomText, NavigationMenuSquare } from "./styles";

import { HomeNavigationBoxButtonProps } from "./styles";
import { ICONS } from "../../assets";

export const HomeNavigationBoxButton: React.FC<
  HomeNavigationBoxButtonProps
> = ({ title, iconName, ...rest }) => {
  return (
    <NavigationMenuSquare {...rest}>
      <Image source={iconName} resizeMode="contain" />
      <CustomText title={title}>{title}</CustomText>
    </NavigationMenuSquare>
  );
};
