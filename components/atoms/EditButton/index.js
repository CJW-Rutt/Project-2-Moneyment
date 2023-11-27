import { View, Pressable, Text } from "react-native";
import { StyleSheet } from "react-native";
import { Image } from "expo-image";

export default function EditButton({ onPress, style }) {
    return (
        <>
            <Pressable onPress={onPress} style={[styles.button, styles.editbutton]}>
                <Image source={require('../../../assets/icons/button/edit.svg')} style={{ width: 12, height: 12 }} />
                <Text style={styles.buttontext}>Edit</Text>
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
    buttontext: {
        fontSize: 12,
        color: "#000",
        fontWeight: 'bold'
    },

})
