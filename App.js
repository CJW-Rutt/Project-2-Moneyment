import React, { createContext, useState, useContext, useEffect } from 'react';
import { StyleSheet, View, Dimensions, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider, useTheme } from 'react-native-paper';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useMaterial3Theme } from '@pchmn/expo-material3-theme';
import { useColorScheme } from 'react-native';
import { MD3DarkTheme, MD3LightTheme } from 'react-native-paper';
import { useFonts } from 'expo-font';
import { SIZES } from './constants';
import NavBar from './components/molecules/NavBar';
import { DarkModeContext } from './context/darkMode';
import { RefreshProvider } from './utils/RefreshContext';
import { auth } from './firebase/firebase.config';
import { Text } from 'react-native-paper';
import { onAuthStateChanged } from 'firebase/auth';
import Login from './screens/Login';

const screenWidth = Dimensions.get('screen').width


export default function App() {
  // const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const colorScheme = useColorScheme();
  const { theme } = useMaterial3Theme();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [signedIn, setSignedIn] = useState(false)
  const [showSignIn, setShowSignIn] = useState(false)

  const paperTheme =
    isDarkMode
      ? {
        ...MD3DarkTheme, colors: {
          ...MD3DarkTheme.colors,
          primaryDark: '#212121',
          secondaryDark: '#323232',
          tertiaryDark: '#535353',
          primaryLight: '#CFCFCF',
          secondaryLight: '#E8E8E8',
          blue: '#95D6CD',
          primaryOrange: '#E98869',
          secondaryOrange: '#C35434'
        }, mode: 'exact', myOwnProperty: true
      }
      : { ...MD3LightTheme, colors: theme.light };

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const checkUser = async () => {
    await onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log('signed in', uid)
        setSignedIn(true)
      } else {
        setSignedIn(false)
        console.log('not signed in')
      }
    })
  }

  useEffect(() => {
    checkUser()
    // console.log('signedIn on App.js is', signedIn)
  }, [])

  //FONTS
  const [fontsLoaded] = useFonts({
    'Montserrat': require('./assets/fonts/Montserrat-VariableFont_wght.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <PaperProvider theme={paperTheme}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <SafeAreaView >
          </SafeAreaView>
          <NavigationContainer>
            {
              signedIn
                ? <NavBar />
                : <>
                  {
                    showSignIn
                      ? <Login />
                      : <>
                        <Pressable
                          style={[styles.unlockContainer, { width: screenWidth }]}
                          onPress={() => setShowSignIn(true)}
                        >
                          <Text style={{ textAlign: 'center', color: "#fff", fontSize: 12, fontWeight: 'bold' }}>Log in to unlock full access</Text>
                        </Pressable>
                        <NavBar signedIn={{ signedIn }} />
                      </>
                  }
                </>
            }
          </NavigationContainer>
        </GestureHandlerRootView>
      </PaperProvider>
    </DarkModeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: SIZES.height
  },
  unlockContainer: {
    position: 'absolute',
    top: 20,
    backgroundColor: '#429488',
    height: 25,
    zIndex: 2,
    textAlign: 'center',
    justifyContent: 'center'
  }
});