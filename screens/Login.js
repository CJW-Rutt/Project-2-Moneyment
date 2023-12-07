import { Text } from "react-native-paper"
import { View, StyleSheet } from "react-native"
import { useState, useEffect, useContext } from "react"
import GoogleSignIn from "../firebase/GoogleSignIn"
import UserRegistrationSignIn from "../firebase/UserRegistration"
import UserEmailSignIn from "../firebase/UserSignIn"
import { onAuthStateChanged, getAuth } from 'firebase/auth'
import { Image } from 'expo-image'
import { DarkModeContext } from "../context/darkMode"

export default function Login() {
    const auth = getAuth();
    const [user, setUser] = useState({})
    const [showRegister, setShowRegister] = useState(false)
    const { isDarkMode } = useContext(DarkModeContext);

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => setUser(currentUser))
    }, [])



    return (
        <>
            <View style={isDarkMode ? styles.containerDark : styles.container}>
                <View style={styles.subContainer}>
                    {
                        showRegister
                            ? <View style={styles.loginContainer}>
                                <Text style={styles.heading}>Register</Text>
                                <Text style={styles.subheading}>Enter your credentials to register</Text>
                                <GoogleSignIn />
                                <View style={styles.divider}>
                                    <View style={styles.line}></View>
                                    <Text style={styles.divText}>or</Text>
                                    <View style={styles.line}></View>
                                </View>
                                <UserRegistrationSignIn />
                                <View style={styles.switchContainer}>
                                    <Text style={isDarkMode ? styles.miscTextDark : styles.miscText}>Already have an account?</Text>
                                    <Text style={isDarkMode ? styles.linkDark : styles.link} onPress={() => setShowRegister(false)}>Log in</Text>
                                </View>
                            </View>
                            : <View style={styles.loginContainer}>
                                <Text style={styles.heading}>Log In</Text>
                                <Text style={styles.subheading}>Enter your credentials to log in</Text>
                                <GoogleSignIn />
                                <View style={styles.divider}>
                                    <View style={styles.line}></View>
                                    <Text style={styles.divText}>or</Text>
                                    <View style={styles.line}></View>
                                </View>
                                <UserEmailSignIn />
                                <View style={styles.switchContainer}>
                                    <Text style={isDarkMode ? styles.miscTextDark : styles.miscText}>Don't have an account?</Text>
                                    <Text style={isDarkMode ? styles.linkDark : styles.link} onPress={() => setShowRegister(true)}>Register</Text>
                                </View>
                            </View>
                    }
                </View>
                <Text>
                    {user?.email}
                </Text>
                <View style={styles.logo}>
                    {isDarkMode
                        ? <Image source={require('../assets/logo/lightLogo.svg')} style={{ width: 191, height: 29 }} />
                        : <Image source={require('../assets/refined-version.svg')} style={{ width: 191, height: 29 }} />}
                </View>
            </View>

        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignContent: 'center',
    },
    containerDark: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignContent: 'center',
        backgroundColor: "#212121"
    },
    subContainer: {
        minHeight: '80%',
        width: '100%',
        padding: 40,

    },
    loginContainer: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignContent: 'center',
    },
    heading: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 15
    },
    subheading: {
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'medium',
        marginBottom: 40
    },
    switchContainer: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 30
    },
    miscText: {
        fontSize: 14,
        fontWeight: 'medium'
    },
    link: {
        color: "#429488",
        fontWeight: 'bold'
    },
    miscTextDark: {
        fontSize: 14,
        fontWeight: 'medium',
        color: "#CFCFCF"
    },
    linkDark: {
        color: "#95D6CD",
        fontWeight: 'bold'
    },
    logo: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    divider: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 20
    },
    line: {
        flex: 1,
        borderBottomColor: "#A9A9A9",
        border: 1,
        borderBottomWidth: 1,
        height: '60%'
    },
    divText: {
        color: "#A9A9A9"
    }
})