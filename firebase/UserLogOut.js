import { signOut } from "firebase/auth";
import { auth } from "./firebase.config";
import { View, TextInput } from "react-native";
import { Button, Text } from "react-native-paper";

export default function UserLogOut() {
    const logOutUser = async () => {
        await signOut(auth)
        console.log('User logged out')
    }

    return (
        <>
            <View>
                <Text>
                    Signing user out
                </Text>
                <Button
                    title='Log out'
                    onClick={() => logOutUser()} />
            </View>
        </>
    )
}