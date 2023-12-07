import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Image } from 'expo-image'
import { useState, useContext, useEffect } from 'react';
import LightDarkSegment from '../components/atoms/LightDarkSegment';
import { Text } from 'react-native-paper';
import TopHeader from '../components/molecules/TopHeader';
import { DarkModeContext } from '../context/darkMode';
import UserLogOut from '../firebase/UserLogOut';
import UserEmailSignIn from '../firebase/UserSignIn';
import { auth } from '../firebase/firebase.config';
import { onAuthStateChanged } from 'firebase/auth'

export default function Settings() {
    const [isDark, setIsDark] = useState(false)
    const [signedIn, setSignedIn] = useState(false)
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

    const screenHeight = Dimensions.get('window').height;

    const checkUser = async () => {
        await onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setSignedIn(true)
            } else {
                setSignedIn(false)
            }
        })
    }

    useEffect(() => {
        checkUser()
    }, [])

    return (
        <View>
            <TopHeader title='Settings' />
            <View style={[styles.container, { height: screenHeight - 250 }]}>
                <View style={styles.subContainer}>
                    <Text style={styles.title} variant="titleMedium">Display</Text>
                    <LightDarkSegment arr={[
                        {
                            title: 'Light',
                            onPress: () => {
                                isDark ? setIsDark(false) : setIsDark(true)
                                toggleDarkMode()
                            },
                            number: 0,
                        },
                        {
                            title: 'Dark',
                            onPress: () => {
                                isDark ? setIsDark(false) : setIsDark(true)
                                toggleDarkMode()
                            },
                            number: 1,
                        }
                    ]} />
                    {signedIn ?
                        <View>
                            <Text style={styles.titleTwo} variant="titleMedium">Profile</Text>
                            <UserLogOut />
                        </View> :
                        <></>
                    }
                </View>

                <View style={styles.secondContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.subTitle} >We are not financial advisors</Text>
                        <Text style={styles.body}>Moneyment provides AI-generated financial suggestions and should be used for informational purposes only. All financial decisions remain ultimately your responsibility.</Text>
                        <Text style={styles.body}>Contact a financial provider to seek professional advice for complex financial matters.</Text>
                    </View>
                    <View style={styles.logoContainer}>
                        {isDark
                            ? <Image source={require('../assets/logo/lightLogo.png')} style={{ width: 191, height: 29 }} />
                            : <Image source={require('../assets/refined-version.svg')} style={{ width: 191, height: 29 }} />}
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
    titleTwo: {
        fontWeight: '800',
        marginTop: 20
    },
    subTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    body: {
        fontSize: 12,
    }
})