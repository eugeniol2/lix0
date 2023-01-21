import 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { ThemeProvider } from 'styled-components/native'
import { theme } from './src/constants'
import { Routes } from './src/routes'
import { AuthProvider } from './src/context/authProvider'
import React from 'react'

export default function App() {
  const [fontsLoaded] = useFonts({
    InterBold: require('./src/assets/fonts/Inter-Bold.ttf'),
    InterSemiBold: require('./src/assets/fonts/Inter-SemiBold.ttf'),
    InterMedium: require('./src/assets/fonts/Inter-Medium.ttf'),
    InterRegular: require('./src/assets/fonts/Inter-Regular.ttf'),
    InterLight: require('./src/assets/fonts/Inter-Light.ttf'),
    MontserratBold: require('./src/assets/fonts/Montserrat-Bold.ttf'),
    MontserratSemiBold: require('./src/assets/fonts/Montserrat-SemiBold.ttf'),
    MontserratMedium: require('./src/assets/fonts/Montserrat-Medium.ttf'),
    MontserratRegular: require('./src/assets/fonts/Montserrat-Regular.ttf'),
    MontserratLight: require('./src/assets/fonts/Montserrat-Light.ttf')
  })

  if (!fontsLoaded) return null
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
  )
}
