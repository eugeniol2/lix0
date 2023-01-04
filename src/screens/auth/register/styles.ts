import styled from "styled-components/native";
import { View } from "react-native";
import { ButtonsArea, ImageWrapper, InputsArea } from "../login/styles";

export const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  padding: 0 16px 72px 16px;
  justify-content: space-around;
  align-items: center;
`;

export const RegisterInputArea = styled(InputsArea)`
  flex: 3;
`;

export const RegisterButtonArea = styled(ButtonsArea)``;

export const RegisterImageWrapper = styled(ImageWrapper)``;
