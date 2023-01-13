import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { AuthNavigator } from "./src/routes/stacks/AuthStack";
import { useFonts } from "expo-font";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/constants";
import { Routes } from "./src/routes";
import { AuthProvider } from "./src/context/authProvider";

const { Screen, Navigator } = createStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    InterBold: require("./src/assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./src/assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./src/assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./src/assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./src/assets/fonts/Inter-Light.ttf"),
    Montserrat: require("./src/assets/fonts/Montserrat-VariableFont_wght.ttf"),
  });

  if (!loaded) return null;
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
