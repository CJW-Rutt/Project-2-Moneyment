import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase.config";
import { useState, useContext } from "react";
import { Text, Button } from "react-native-paper";
import { View, TextInput, StyleSheet } from "react-native";
import Home from "../screens/Home";
import { DarkModeContext } from "../context/darkMode"

export default function UserEmailSignIn({ navigation }) {
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const [isError, setIsError] = useState(false)
    const { isDarkMode } = useContext(DarkModeContext);

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            console.log(user)
            setIsError(false)
        } catch (err) {
            console.log(err)
            setIsError(true)
        }
    }

    return (
        <>
            <View style={styles.container}>
                <Text style={isDarkMode ? styles.textDark : styles.text}>* required fields</Text>
                <View style={styles.inputContainer}>
                    <Text style={isDarkMode ? styles.textDark : styles.text}>
                        Email *
                    </Text>
                    <TextInput
                        placeholder='youremail@email.com'
                        value={loginEmail}
                        onChangeText={(text) => {
                            setLoginEmail(text)
                        }}
                        style={isDarkMode ? styles.inputDark : styles.input}
                        placeholderTextColor={isDarkMode ? "#CFCFCF" : "#707070"}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={isDarkMode ? styles.textDark : styles.text}>
                        Password *
                    </Text>
                    <TextInput
                        placeholder='min 6 characters'
                        value={loginPassword}
                        onChangeText={(text) => {
                            setLoginPassword(text)
                        }}
                        style={isDarkMode ? styles.inputDark : styles.input}
                        placeholderTextColor={isDarkMode ? "#CFCFCF" : "#707070"}
                    />
                </View>
                <Button
                    mode='contained'
                    style={isDarkMode ? styles.buttonDark : styles.button}
                    labelStyle={isDarkMode ? styles.buttonTextDark : styles.buttonText}
                    onPress={() => {
                        login()
                        console.log(loginEmail, loginPassword)
                        setLoginEmail("")
                        setLoginPassword("")
                        // navigation.navigate('Home')
                    }}
                >
                    Log In
                </Button>
                {
                    isError
                        ? <Text>Login failed. Please check your email and password</Text>
                        : <></>
                }
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        gap: 15
    },
    text: {
        color: "#707070",
        fontSize: 12
    },
    textDark: {
        color: "#CFCFCF",
        fontSize: 12
    },
    inputContainer: {
        gap: 3
    },
    input: {
        borderRadius: 5,
        borderColor: '#707070',
        borderWidth: 1,
        height: 35,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 12
    },
    inputDark: {
        borderRadius: 5,
        borderColor: '#707070',
        borderWidth: 1,
        height: 35,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 12,
        color: "#CFCFCF"
    },
    button: {
        backgroundColor: '#429488',
        borderRadius: 10,
        height: 49,
        justifyContent: 'center',
        marginTop: 10
    },
    buttonText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: 'medium'
    },
    buttonDark: {
        backgroundColor: '#95D6CD',
        borderRadius: 10,
        height: 49,
        justifyContent: 'center',
        marginTop: 10
    },
    buttonTextDark: {
        color: "#212121",
        fontSize: 14,
        fontWeight: 'medium'
    }
})