import { View, StyleSheet, Dimensions } from "react-native"
import { Text, Divider } from "react-native-paper"

const screenWidth = Dimensions.get('screen').width;

export default function TopHeader ({
    title='test'
}) {
    return (
        <>
        <View style={styles.container}>
            <Text variant="headlineMedium" style={styles.text}>
                {title}
            </Text>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        minHeight: 70,
        width: screenWidth,
        maxHeight: 70,
        flex: 1,
        justifyContent: 'space-between',
        borderBottomColor: '#A9A9A9',
        borderBottomWidth: 1
    },
    text: {
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 10
    }
})