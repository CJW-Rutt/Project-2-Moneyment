import { Pressable, View, Text, StyleSheet } from "react-native";
import { DarkModeContext } from '../../../context/darkMode';
import { useContext } from 'react'

export default function SaveButton({ onSave }) {
    const { isDarkMode } = useContext(DarkModeContext);

    return (
        <View style={styles.outerContainer}>
            <Pressable onPress={onSave}>
                <View style={isDarkMode ? styles.containerDark : styles.container}>
                    <Text style={isDarkMode ? styles.buttonTextDark : styles.buttonText}>Save</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    outerContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        minWidth: 350,
        backgroundColor: '#429488',
        maxHeight: 49,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    containerDark: {
        minWidth: 350,
        backgroundColor: '#95D6CD',
        maxHeight: 49,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
    },
    buttonTextDark: {
        color: '#212121',
        fontWeight: 'bold',
        fontSize: 14,
    }
});