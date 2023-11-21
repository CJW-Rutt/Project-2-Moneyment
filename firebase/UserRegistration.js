import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase.config";
import { useState } from "react";
import { Text, Button } from "react-native-paper";
import { View, TextInput } from "react-native";

export default function UserRegistrationSignIn() {
    const [registerEmail, setRegisterEmail] = useState('')
    const [registerPassword, setRegisterPassword] = useState('')

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
            console.log(user)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <View>
                <View>
                    <View>
                        <Text>Email</Text>
                    </View>
                    <TextInput
                        placeholder='email...'
                        value={registerEmail}
                        onChange={(event) => {
                            setRegisterEmail(event.target.value)
                        }}
                    />
                    <View>
                        <Text>Password</Text>
                    </View>
                    <TextInput
                        placeholder='password...'
                        value={registerPassword}
                        onChange={(event) => {
                            setRegisterPassword(event.target.value)
                        }}
                    />
                </View>
                <Button
                    title='Register'
                    onClick={() => {
                        register()
                        setRegisterEmail("")
                        setRegisterPassword("")
                    }}
                />
            </View >
        </>
    )
}