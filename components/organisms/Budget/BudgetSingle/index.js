import { View, Text, StyleSheet, ScrollView } from "react-native";
import TransactionsCard from "../../../molecules/TransactionsCard";
import BarGraph from "../../../atoms/BarGraph";

export default function BudgetSingle() {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.barGraphContainer}>
                    <BarGraph />
                </View>
                <View style={styles.transactionCardContainer}>
                    <TransactionsCard />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    transactionCardContainer: {
        zIndex: -1
    },
    barGraphContainer: {
        marginTop: 10
    }
})