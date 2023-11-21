import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase.config";
import { useState } from "react";
import { Text, Button } from "react-native-paper";
import { View, TextInput } from "react-native";

export default function UserEmailSignIn() {
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            console.log(user)
        } catch (err) {
            console.log(err)
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
                        onChange={(event) => {
                            setLoginEmail(event.target.value)
                        }}
                    />
                    <Text>
                        Password
                    </Text>
                    <TextInput
                        placeholder='password...'
                        value={loginPassword}
                        onChange={(event) => {
                            setLoginPassword(event.target.value)
                        }}
                    />
                </View>
                <Button
                    title='Login'
                    onClick={() => {
                        login()
                        setLoginEmail("")
                        setLoginPassword("")
                    }} />
            </View>
        </>
    )
}