import { View, Pressable, Text } from "react-native";
import { StyleSheet } from "react-native";

export default function ManageBudget() {
    return (
        <>
        <Pressable style={[styles.button, styles.budgetbutton,styles.shadow]}>
<Text style={styles.buttontext}>Manage Budget</Text>
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
        borderColor: "#fff",
        borderWidth: 1,
        borderRadius: 8,

      
    },
     buttontext: {
        fontSize: 12,
        fontWeight: 500,
        color: "#fff",

     },
     shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: -4,
            height: 8,
        },
        shadowOpacity: 0.8,
        shadowRadius: 5,
     }
})
