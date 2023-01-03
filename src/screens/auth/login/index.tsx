import React, { useState } from "react";
import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IMAGES } from "../../../assets";
import { Container, ButtonContainer } from "./styles";
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
        <Image source={IMAGES.logo} />
        <View style={{ width: "100%" }}>
          <ControlledInput
            labelText="E-mail"
            name="email"
            control={control}
            error={errors.email}
            autoCapitalize="none"
            style={{ marginBottom: 16 }}
          />
          <ControlledInput
            labelText="Senha"
            name="password"
            control={control}
            error={errors.password}
            style={{ marginBottom: 16 }}
          />
        </View>
        <ButtonContainer>
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
        </ButtonContainer>
      </Container>
    </SafeAreaView>
  );
};
