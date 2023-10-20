import { View, Text, StyleSheet } from 'react-native';

export default function PhotoFrame() {
    <View>
        <View style={styles.frame}></View>
    </View>
}

const styles = StyleSheet.create({
    frame: {

        height: 563,
        borderRadius: 15,
        borderWidth: 5,
        borderColor: "#6AB4AC"

    }
});