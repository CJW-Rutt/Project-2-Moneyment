import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase.config";
import { useState, useContext } from "react";
import { Text, Button } from "react-native-paper";
import { View, TextInput, StyleSheet } from "react-native";
import { DarkModeContext } from "../context/darkMode"

export default function UserRegistrationSignIn() {
    const [registerEmail, setRegisterEmail] = useState('')
    const [registerPassword, setRegisterPassword] = useState('')
    const [isError, setIsError] = useState(false)
    const { isDarkMode } = useContext(DarkModeContext);

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
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
                        value={registerEmail}
                        onChangeText={(text) => {
                            setRegisterEmail(text)
                        }}
                        style={isDarkMode ? styles.inputDark : styles.input}
                        placeholderTextColor={isDarkMode ? "#CFCFCF" : "#707070"}
                        secureTextEntry
                    />
                </View>
                <View style={styles.inputContainer}>

                    <Text style={isDarkMode ? styles.textDark : styles.text}>
                        Password *
                    </Text>
                    <TextInput
                        placeholder='min 6 characters'
                        value={registerPassword}
                        onChangeText={(text) => {
                            setRegisterPassword(text)
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
                        try {
                            console.log('Registration complete:', registerEmail, registerPassword)
                            register()
                        }
                        catch (err) {
                            console.log(err)
                        }
                        finally {
                            setRegisterEmail("")
                            setRegisterPassword("")
                        }
                    }}
                >
                    Register
                </Button>
                {
                    isError
                        ? <Text>Please enter a valid email and a password of at least six characters</Text>
                        : <></>
                }
            </View >
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