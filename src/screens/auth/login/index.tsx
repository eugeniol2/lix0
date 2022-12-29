import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { IMAGES } from "../../../assets";
import { Container } from "./styles";
import { Button } from "../../../components/button";
import { theme } from "../../../constants";

export const Login: React.FC = () => {
  return (
    <SafeAreaView>
      <Container>
        <Image source={IMAGES.logo} />
        <Button title="Login" backGroundColor={theme.COLORS.secondary_500} />
      </Container>
    </SafeAreaView>
  );
};
