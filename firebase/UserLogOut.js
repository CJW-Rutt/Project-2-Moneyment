import { signOut } from "firebase/auth";
import { auth } from "./firebase.config";
import { View, TextInput, StyleSheet, Pressable } from "react-native";
import { Text, Button } from "react-native-paper";
import { Image } from 'expo-image'
import { DarkModeContext } from "../context/darkMode"
import { useContext } from "react"

export default function UserLogOut() {
    const logOutUser = async () => {
        await signOut(auth)
        console.log('User logged out')
    }
    const { isDarkMode } = useContext(DarkModeContext);

    return (
        <>
            <View style={styles.container}>
                {/* <Text>
                    Log Out
                </Text> */}
                {/* <Button
                    onPress={() => logOutUser()}
                    mode='contained'
                >
                    Log Out
                </Button> */}
                <Pressable onPress={() => logOutUser()}
                    style={styles.button}            >
                    <Text style={isDarkMode ? styles.buttonTextDark : styles.buttonText}   >Log Out</Text>
                    {
                        isDarkMode ? <Image source={require('../assets/icons/arrow/arrow_dark.svg')} style={{ width: 45, height: 45 }} /> :
                            <Image source={require('../assets/icons/arrow/arrow.svg')} style={{ width: 45, height: 45 }} />
                    }
                </Pressable>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column'
    },
    button: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonText: {
        color: "#000",
        fontSize: 14,
        fontWeight: 'bold'
    },
    buttonTextDark: {
        color: "#CFCFCF",
        fontSize: 14,
        fontWeight: 'bold'
    }
})