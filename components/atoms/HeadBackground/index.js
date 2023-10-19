import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

export default function HeaderBackground() {
    return (
        <>
<View style={styles.container}>

</View>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
       justifyContent: "center",
       alignItems: "center",
       backgroundColor: "#fff",
        width: 390,
        height: 65,
        borderBottomWidth: 1,
borderBottomColor: "#A9A9A9"
    },
})