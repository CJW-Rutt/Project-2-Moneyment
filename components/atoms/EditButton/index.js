import { Pressable, Text } from "react-native";
import { StyleSheet } from "react-native";
import { Image } from "expo-image";
import { DarkModeContext } from '../../../context/darkMode';
import { useContext } from "react";

export default function EditButton({ onPress }) {

    const { isDarkMode } = useContext(DarkModeContext);

    return (
        <>
            <Pressable onPress={onPress} style={isDarkMode ? [styles.buttonDark, styles.editbutton] : [styles.button, styles.editbutton]}>
                {
                    isDarkMode ? <Image source={require('../../../assets/icons/button/edit_dark.svg')} style={{ width: 12, height: 12 }} />
                        : <Image source={require('../../../assets/icons/button/edit.svg')} style={{ width: 12, height: 12 }} />
                }
                <Text style={isDarkMode ? styles.buttontextDark : styles.buttontext}>Edit</Text>
            </Pressable>
        </>
    )
}
const styles = StyleSheet.create({
    button: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "none",
        width: 66,
        height: 25,
        borderColor: "#000",
        borderWidth: 1.5,
        borderRadius: 5,
        marginRight: 20,
        marginTop: 10,
        flexDirection: 'row',
        gap: 5
    },
    buttonDark: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "none",
        width: 66,
        height: 25,
        borderColor: "#CFCFCF",
        borderWidth: 1.5,
        borderRadius: 5,
        marginRight: 20,
        marginTop: 10,
        flexDirection: 'row',
        gap: 5
    },
    buttontext: {
        fontSize: 12,
        color: "#000",
        fontWeight: 'bold'
    },
    buttontextDark: {
        fontSize: 12,
        color: "#CFCFCF",
        fontWeight: 'bold'
    }

})
