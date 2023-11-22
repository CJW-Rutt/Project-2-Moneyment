import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase.config";
import { useState } from "react";
import { Text, Button } from "react-native-paper";
import { View, TextInput } from "react-native";

export default function UserRegistrationSignIn() {
    const [registerEmail, setRegisterEmail] = useState('')
    const [registerPassword, setRegisterPassword] = useState('')
    const [isError, setIsError] = useState(false)

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
            <View>
                <View>
                    <View>
                        <Text>Email</Text>
                    </View>
                    <TextInput
                        placeholder='email...'
                        value={registerEmail}
                        onChangeText={(text) => {
                            setRegisterEmail(text)
                        }}
                    />
                    <View>
                        <Text>Password</Text>
                    </View>
                    <TextInput
                        placeholder='password...'
                        value={registerPassword}
                        onChangeText={(text) => {
                            setRegisterPassword(text)
                        }}
                    />
                </View>
                <Button
                    mode='contained'
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
                    register
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