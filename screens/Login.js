import { Text } from "react-native-paper"
import { View, StyleSheet } from "react-native"
import { useState, useEffect, useContext } from "react"
import GoogleSignIn from "../firebase/GoogleSignIn"
import UserRegistrationSignIn from "../firebase/UserRegistration"
import UserEmailSignIn from "../firebase/UserSignIn"
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from "../firebase/firebase.config"
import { Image } from 'expo-image'
import { DarkModeContext } from "../context/darkMode"

export default function Login() {
    const [user, setUser] = useState({})
    const [showRegister, setShowRegister] = useState(false)
    const { isDarkMode } = useContext(DarkModeContext);

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => setUser(currentUser))
    }, [])

    return (
        <>
            <View>
                <View>
                    {
                        showRegister
                            ? <>
                                <Text>Register</Text>
                                <UserRegistrationSignIn />
                                <View style={styles.switchContainer}>
                                    <Text>Already have an account?</Text>
                                    <Text onPress={() => setShowRegister(false)}>Log in</Text>
                                </View>
                            </>
                            : <>
                                <Text>Login Screen</Text>
                                <GoogleSignIn />
                                <UserEmailSignIn />
                                <View style={styles.switchContainer}>
                                    <Text>Don't have an account?</Text>
                                    <Text onPress={() => setShowRegister(true)}>Register</Text>
                                </View>
                            </>
                    }
                </View>
                <Text>
                    {user?.email}
                </Text>
                <View>
                    {isDarkMode
                        ? <Image source={require('../assets/logo/lightLogo.png')} style={{ width: 191, height: 29 }} />
                        : <Image source={require('../assets/refined-version.png')} style={{ width: 191, height: 29 }} />}
                </View>
            </View>

        </>
    )
}

const styles = StyleSheet.create({
    switchContainer: {
        flexDirection: 'row',
        gap: 10
    }
})