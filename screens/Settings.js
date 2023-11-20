import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Image } from 'expo-image'
import { useState, useContext } from 'react';
import Segmented from '../components/atoms/Segmented';
import { Text } from 'react-native-paper';
import TopHeader from '../components/molecules/TopHeader';
import { DarkModeContext } from '../context/darkMode';


export default function Settings() {
    // const { isDarkMode, toggleDarkMode } = useTheme();
    const [isDark, setIsDark] = useState(false)
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

    return (
        <View>
            <TopHeader title='Settings' />
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <Text style={styles.title} variant="titleMedium">Display</Text>
                    <Segmented arr={[
                        {
                            title: 'Light',
                            onPress: () => {
                                setIsDark(false)
                                toggleDarkMode()
                                // console.log(isDark)
                            },
                            number: 0,
                        },
                        {
                            title: 'Dark',
                            onPress: () => {
                                setIsDark(true)
                                toggleDarkMode()
                                // console.log(isDark)
                            },
                            number: 1,
                        }
                    ]} />
                </View>
                {
                    // isDark || darkMode ? <Text>it's dark!</Text> : <Text>it's not</Text>
                }
                <View style={styles.secondContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.subTitle} variant="titleMedium">We are not financial advisors</Text>
                        <Text style={styles.body}>Moneyment provides AI-generated financial suggestions and should be used for informational purposes only. All financial decisions remain ultimately your responsibility.</Text>
                        <Text style={styles.body}>Contact a financial provider to seek professional advice for complex financial matters.</Text>
                    </View>
                    <View style={styles.logoContainer}>
                        {isDark
                            ? <Image source={require('../assets/logo/lightLogo.png')} style={{ width: 191, height: 29 }} />
                            : <Image source={require('../assets/refined-version.png')} style={{ width: 191, height: 29 }} />}
                    </View>
                </View>
            </View>
        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        padding: 20,
        justifyContent: "space-between",
        height: '94%'
    },
    subContainer: {
        display: "flex",
        flexDirection: "column",
        gap: 10
    },
    secondContainer: {
        display: "flex",
        flexDirection: "column",
        gap: 40
    },
    textContainer: {
        display: "flex",
        flexDirection: "column",
        gap: 8
    },
    logoContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center'
    },
    title: {
        fontWeight: '800'
    },
    subTitle: {
        fontSize: 21,
        fontWeight: 'bold',
        // color: "#707070"
    },
    body: {
        fontSize: 12,
        // color: "#707070"
    }
})