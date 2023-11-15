import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Image } from 'expo-image'
import { useState, useContext } from 'react';
import Segmented from '../components/atoms/Segmented';
import { Text } from 'react-native-paper';
import TopHeader from '../components/molecules/TopHeader';
import { DarkModeContext, DarkModeProvider } from '../context/darkMode';


export default function Settings() {
    // const { isDarkMode, toggleDarkMode } = useTheme();
    const [isDark, setIsDark] = useState(false)
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

    return (
        <View>
            <TopHeader title='Settings' />
            <View>
                <View>
                    <Text variant="titleMedium">Display</Text>
                    <Segmented arr={[
                        {
                            title: 'Light',
                            onPress: () => {
                                setIsDark(false)
                                toggleDarkMode()
                                console.log(isDark)
                            },
                            number: 0,
                        },
                        {
                            title: 'Dark',
                            onPress: () => {
                                setIsDark(true)
                                toggleDarkMode()
                                console.log(isDark)
                            },
                            number: 1,
                        }
                    ]} />
                </View>
                {
                    isDark || darkMode ? <Text>it's dark!</Text> : <Text>it's not</Text>
                }
                <View>
                    <View>
                        <Text variant="titleMedium">We are not financial advisors</Text>
                        <Text>Moneyment provides AI-generated financial suggestions and should be used for informational purposes only. All financial decisions remain ultimately your responsibility.</Text>
                        <Text>Seek professional advice for complex financial matters.</Text>
                    </View>
                    <View>
                        <Image source={require('../assets/refined-version.png')} style={{ width: 191, height: 29 }} />
                    </View>
                </View>
            </View>
        </View>

    );
}
const styles = StyleSheet.create({

})