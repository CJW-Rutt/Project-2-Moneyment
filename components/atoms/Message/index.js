import { View, Text, StyleSheet } from "react-native";

export default function Message({ header, bodyCopy }) {
    return (
        <View style={styles.container}>
            {header && <Text style={[styles.header, styles.text]}>{header}</Text>}
            {bodyCopy && <Text style={[styles.bodyCopy, styles.text]}>{bodyCopy}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 18,
        fontWeight: '700'
    },
    bodyCopy: {
        fontSize: 14,
        color: '#707070'
    },
    text: {
    },
    container: {
        padding: 5,
        gap: 10
    },

})