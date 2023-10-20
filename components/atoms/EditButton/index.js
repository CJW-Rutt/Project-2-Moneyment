import { View, Pressable, Text } from "react-native";
import { StyleSheet } from "react-native";

export default function EditButton() {
    return (
        <>
        <Pressable style={[styles.button, styles.editbutton]}>
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
        width: 130,
        height: 45,
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 50,

      
    },
     buttontext: {
        fontSize: 12,
        fontWeight: 500,
        color: "#000",

     },

})
