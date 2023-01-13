import styled from "styled-components/native";
import { Image } from "react-native";
import { SafeAreaView as CustomSafeAreaView } from "react-native-safe-area-context";

export const SafeAreaViewContainer = styled(CustomSafeAreaView)`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
`;
