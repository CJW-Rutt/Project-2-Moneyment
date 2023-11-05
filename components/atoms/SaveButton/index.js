import { Pressable, View, Text, StyleSheet } from "react-native";

export default function SaveButton({ onSave }) {
    return (
        <View style={styles.outerContainer}>
            <Pressable onPress={onSave}>
                <View style={styles.container}>
                    <Text style={styles.buttonText}>Save</Text>
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
        backgroundColor: '#6AB4AC',
        maxHeight: 50,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
	},
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
    }
});