import React, { useState } from "react";
import { Image, View, KeyboardAvoidingView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IMAGES } from "../../../assets";
import { Container, ImageWrapper, ButtonsArea, InputsArea } from "./styles";
import { MainButton, ControlledInput } from "../../../components";
import { theme } from "../../../constants";
import { loginSchema } from "../../../validations/loginSchema";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../../context/authProvider/useAuth";

type loginData = {
  email: string;
  password: string;
};

export const Login: React.FC = () => {
  const { authenticate } = useAuth();
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<loginData>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });

  async function handleUserLogin({ email, password }: loginData) {
    try {
      await authenticate(email, password);
      navigation.navigate("Home");
    } catch (error) {
      console.log(error);
      //mostrar erros com toastify ?
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <ImageWrapper>
          <Image source={IMAGES.logo} />
        </ImageWrapper>
        <InputsArea>
          <ControlledInput
            labelText="E-mail"
            name="email"
            keyboardType="email-address"
            control={control}
            error={errors.email}
            autoCapitalize="none"
          />
          <ControlledInput
            labelText="Senha"
            name="password"
            autoCapitalize="none"
            secureTextEntry
            control={control}
            error={errors.password}
          />
        </InputsArea>
        <ButtonsArea>
          <MainButton
            type="contained"
            color={theme.COLORS.secondary_500}
            title="Entrar"
            onPress={handleSubmit(handleUserLogin)}
            style={{ marginBottom: 16 }}
          />
          <MainButton
            type="outlined"
            color={theme.COLORS.primary_500}
            title="Cadastrar"
          />
        </ButtonsArea>
      </Container>
    </SafeAreaView>
  );
};
