import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { IMAGES } from "../../../assets";
import { ButtonsArea, Container, ImageWrapper } from "./styles";
import { MainButton } from "../../../components";
import { theme } from "../../../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

export const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <ImageWrapper>
          <Image source={IMAGES.logo} />
        </ImageWrapper>
        <ButtonsArea>
          <MainButton
            color={theme.COLORS.secondary_500}
            title="LOGIN"
            type="outlined"
            style={{ marginBottom: 16 }}
            onPress={() => navigation.navigate("Login")}
          />
          <MainButton
            color={theme.COLORS.primary_500}
            title="REGISTER"
            type="contained"
            onPress={() => navigation.navigate("Register")}
          />
        </ButtonsArea>
      </Container>
    </SafeAreaView>
  );
};
