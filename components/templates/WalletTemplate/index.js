import Balance from "../../organisms/Balance";
import Message from "../../atoms/Message";

import { View, Text, StyleSheet } from "react-native";

export default function WalletTemplate() {
    return (
        <View style={styles.container}>
            <View>
                <Message header='Track Your Progress' bodyCopy='Gain insights with dynamic, interactive visualizations' />
            </View>
            <View>
                <Balance />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})