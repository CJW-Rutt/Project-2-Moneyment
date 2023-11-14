import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { useFonts } from 'expo-font';  // Import useFonts from expo-font
import { SIZES } from './constants';

import NavBar from './components/molecules/NavBar';
import Header from './components/molecules/Header';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: darkMode ? 'black' : 'white',
      text: darkMode ? 'white' : 'black',
      // Add more theme-specific colors
    },
  };

  const [fontsLoaded] = useFonts({
    'Montserrat': require('./assets/fonts/Montserrat-VariableFont_wght.ttf'),
  });

  // Check if fonts are loaded before rendering the app
  if (!fontsLoaded) {
    return null; // Or render a loading indicator
  }

  return (
    <PaperProvider theme={theme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaView >
        <Header />
          <NavigationContainer>
          </NavigationContainer>
        </SafeAreaView>

        <NavBar toggleTheme={toggleTheme}/>
      </GestureHandlerRootView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: SIZES.height
  }
});
