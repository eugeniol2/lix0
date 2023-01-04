import { View, Text, Image } from "react-native";
import React from "react";
import { Container, RegisterImageWrapper } from "./styles";
import { ControlledInput, MainButton } from "../../../components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../../validations/registerSchema";
import { RegisterInputArea, RegisterButtonArea } from "./styles";
import { theme } from "../../../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { IMAGES } from "../../../assets";

type RegisterData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const Register: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(registerSchema),
  });

  function handleRegisterUser(data: RegisterData) {
    console.log(data);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <RegisterImageWrapper>
          <Image source={IMAGES.logo} />
        </RegisterImageWrapper>
        <Text
          style={{
            fontFamily: theme.FONTS.interbold,
            paddingVertical: 16,
            width: "100%",
          }}
        >
          Por favor, preencha os campos abaixo para realizar o cadastro.
        </Text>
        <RegisterInputArea>
          <ControlledInput
            labelText="Nome"
            name="name"
            autoCapitalize="none"
            control={control}
            error={errors.name}
            // style={{ marginBottom: 16 }}
          />
          <ControlledInput
            labelText="E-mail"
            name="email"
            autoCapitalize="none"
            keyboardType="email-address"
            control={control}
            error={errors.email}
            // style={{ marginBottom: 16 }}
          />
          <ControlledInput
            labelText="Senha"
            name="password"
            autoCapitalize="none"
            secureTextEntry
            control={control}
            error={errors.password}
            // style={{ marginBottom: 16 }}
          />
          <ControlledInput
            labelText="Repetir Senha"
            name="confirmPassword"
            autoCapitalize="none"
            secureTextEntry
            control={control}
            error={errors.confirmPassword}
            // style={{ marginBottom: 16 }}
          />
        </RegisterInputArea>
        <RegisterButtonArea>
          <MainButton
            type="contained"
            color={theme.COLORS.secondary_500}
            title="CADASTRAR"
            onPress={handleSubmit(handleRegisterUser)}
            style={{ marginBottom: 16 }}
          />
          <MainButton
            type="outlined"
            color={theme.COLORS.auxiliary_red}
            title="CANCELAR"
          />
        </RegisterButtonArea>
      </Container>
    </SafeAreaView>
  );
};
