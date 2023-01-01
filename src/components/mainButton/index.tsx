import { StyleSheet, Text, TouchableOpacityProps, View } from "react-native";
import { TouchableOpacityButton, TouchableOpacityButtonTitle } from "./styles";
import React from "react";
import { MainButtonProps } from "./styles";

export const MainButton: React.FC<MainButtonProps> = ({
  title,
  type,
  color,
  ...rest
}) => {
  return (
    <TouchableOpacityButton {...rest} type={type} color={color} title={title}>
      <TouchableOpacityButtonTitle type={type} color={color} title={title}>
        {title}
      </TouchableOpacityButtonTitle>
    </TouchableOpacityButton>
  );
};
