import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebase.config";
import { Button } from "react-native-paper";
import { StyleSheet, Text, Pressable } from "react-native"
import { Image } from 'expo-image'
import { DarkModeContext } from "../context/darkMode"
import { useContext } from "react"


export default function GoogleSignIn() {
    const GoogleLogIn = async () => {
        const provider = new GoogleAuthProvider()
        const authorization = auth
        const result = await signInWithPopup(authorization, provider)

        console.log(result)
    }

    const { isDarkMode } = useContext(DarkModeContext);

    return (
        <>
            <Pressable onPress={() => GoogleLogIn()}
                style={styles.button}            >
                <Image source={require('../assets/icons/login/google.svg')} style={{ width: 22, height: 22 }} />
                <Text style={isDarkMode ? styles.buttonTextDark : styles.buttonText}   >Log in with Google</Text>
            </Pressable>
        </>
    )
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
        borderRadius: 10,
        borderColor: "#A9A9A9",
        borderWidth: 1,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 12,
    },
    buttonText: {
        color: "#000",
        fontSize: 12,
        fontWeight: 'medium'
    },
    buttonTextDark: {
        color: "#CFCFCF",
        fontSize: 12,
        fontWeight: 'medium'
    }
})