import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase.config";
import { useState } from "react";
import { Text, Button } from "react-native-paper";
import { View, TextInput } from "react-native";
import Home from "../screens/Home";

export default function UserEmailSignIn({ navigation }) {
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const [isError, setIsError] = useState(false)

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
            <View>
                <Text>Sign In</Text>
                <View>
                    <Text>
                        Email
                    </Text>
                    <TextInput
                        placeholder='email...'
                        value={loginEmail}
                        onChangeText={(text) => {
                            setLoginEmail(text)
                        }}
                    />
                    <Text>
                        Password
                    </Text>
                    <TextInput
                        placeholder='password...'
                        value={loginPassword}
                        onChangeText={(text) => {
                            setLoginPassword(text)
                        }}
                    />
                </View>
                <Button
                    mode='contained'
                    onPress={() => {
                        login()
                        console.log(loginEmail, loginPassword)
                        setLoginEmail("")
                        setLoginPassword("")
                        // navigation.navigate('Home')
                    }}
                >
                    Login
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