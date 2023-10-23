import { View, Text, StyleSheet } from "react-native";

export default function Message({ header, bodyCopy }) {
    return (
        <View style={styles.container}>
            <Text style={[styles.header, styles.text]}>{header}</Text>
            <Text style={[styles.bodyCopy, styles.text]}>{bodyCopy}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 16,
        fontWeight: '700'
    },
    bodyCopy: {
        fontSize: 12,
        color: '#707070'
    },
    text: {
        paddingLeft: 20
    },
    container: {
        gap: 10
    }
})