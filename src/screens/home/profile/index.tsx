import { Text } from "react-native";
import React from "react";
import { SafeAreaViewContainer } from "./styles";
import { ControlledInput, MainButton } from "../../../components";
import { theme } from "../../../constants";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { profileSchema } from "../../../validations/profileSchema";
import { ICONS } from "../../../assets";

type ProfileData = {
  name: string;
  email: string;
  birthDay: Date;
  location: string;
};

export const Profile = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileData>({
    defaultValues: {
      name: "",
      email: "",
      birthDay: new Date(),
      location: "",
    },
    resolver: yupResolver(profileSchema),
  });
  return (
    <SafeAreaViewContainer>
      <ControlledInput
        control={control}
        error={errors.name}
        name="name"
        iconPath={ICONS.BellIcon}
        placeholder="nome"
        isProfile
      />
      <ControlledInput
        control={control}
        error={errors.email}
        name="email"
        iconPath={ICONS.BellIcon}
        placeholder="email"
        isProfile
      />
      <ControlledInput
        control={control}
        error={errors.birthDay}
        name="birthDay"
        iconPath={ICONS.BellIcon}
        placeholder="Data de nascimento"
        isProfile
      />
      <ControlledInput
        control={control}
        error={errors.location}
        name="location"
        iconPath={ICONS.BellIcon}
        placeholder="Endereço"
        isProfile
      />
    </SafeAreaViewContainer>
  );
};
