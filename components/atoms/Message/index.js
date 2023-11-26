import { View, Text, StyleSheet } from "react-native";
import { DarkModeContext } from "../../../context/darkMode";
import { useContext } from "react";

export default function Message({ header, bodyCopy }) {

    const { isDarkMode } = useContext(DarkModeContext)

    return (
        <View style={styles.container}>
            {header && <Text style={isDarkMode ? [styles.header, styles.textDark] : [styles.header, styles.text]}>{header}</Text>}
            {bodyCopy && <Text style={isDarkMode ? [styles.bodyCopy, styles.textDark] : [styles.bodyCopy, styles.text]}>{bodyCopy}</Text>}
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
    textDark: {
        color: '#CFCFCF'
    },
    container: {
        paddingLeft: 20,
        paddingRight: 20,
        gap: 3
    },

})