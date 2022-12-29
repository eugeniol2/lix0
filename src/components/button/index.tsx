import { StyleSheet, Text, TouchableOpacityProps, View } from "react-native";
import { TouchableOpacityButton, TouchableOpacityButtonTitle } from "./styles";
import React from "react";
import { theme } from "../../constants";

interface Props extends TouchableOpacityProps {
  title: string;
  backGroundColor: string;
}

export const Button: React.FC<Props> = ({
  title,
  backGroundColor,
  ...rest
}) => {
  return (
    <TouchableOpacityButton
      {...rest}
      style={{ backgroundColor: backGroundColor }}
    >
      <TouchableOpacityButtonTitle>{title}</TouchableOpacityButtonTitle>
    </TouchableOpacityButton>
  );
};
