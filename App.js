import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';



import NavBar from './components/molecules/NavBar';
import Icon from 'react-native-vector-icons/FontAwesome'
import Header from './components/molecules/Header';

Icon.loadFont();

export default function App() {

  const [fontsLoaded] = useFonts({
    'Montserrat': require('./assets/fonts/Montserrat-VariableFont_wght.ttf'),
  });

  return (

    <PaperProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaView>
            <Header />
          <NavigationContainer>
          </NavigationContainer>
        </SafeAreaView>
        <NavBar />
      </GestureHandlerRootView>
    </PaperProvider>

  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});