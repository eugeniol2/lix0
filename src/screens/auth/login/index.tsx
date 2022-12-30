import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { IMAGES } from "../../../assets";
import { Container } from "./styles";
import { MainButton } from "../../../components/mainButton";
import { theme } from "../../../constants";

export const Login: React.FC = () => {
  return (
    <SafeAreaView>
      <Container>
        <Image source={IMAGES.logo} />
        <MainButton
          type="outlined"
          color={theme.COLORS.secondary_500}
          title="Login"
        />

        <MainButton
          type="contained"
          color={theme.COLORS.primary_400}
          title="Cadastrar"
        />
      </Container>
    </SafeAreaView>
  );
};
