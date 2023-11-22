import { signOut } from "firebase/auth";
import { auth } from "./firebase.config";
import { View, TextInput, StyleSheet } from "react-native";
import { Text, Button } from "react-native-paper";

export default function UserLogOut() {
    const logOutUser = async () => {
        await signOut(auth)
        console.log('User logged out')
    }

    return (
        <>
            <View style={styles.container}>
                <Text>
                    Log Out
                </Text>
                <Button
                    onPress={() => logOutUser()}
                    mode='contained'
                >
                    Log Out
                </Button>


            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column'
    }
})