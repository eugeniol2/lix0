import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Home } from "./src/screens/home";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { AuthNavigator } from "./src/routes/AuthNavigator";
import { useFonts } from "expo-font";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/constants";

const { Screen, Navigator } = createStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    InterBold: require("./src/assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./src/assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./src/assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./src/assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./src/assets/fonts/Inter-Light.ttf"),
  });

  if (!loaded) return null;
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        {/* {isAuthenticated ? AuthNavigator : DrawerNavigator } */}
        <AuthNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}
