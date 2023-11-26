import { View, StyleSheet, ScrollView } from "react-native";
import TransactionsCard from "../../../molecules/TransactionsCard";
import BudgetSingleSegment from "../BudgetSingleSegment";

export default function BudgetSingle({ budget }) {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.barGraphContainer}>
                    <BudgetSingleSegment budget={budget} />
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
        flex: 0,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    transactionCardContainer: {
        zIndex: 1,
    },
    barGraphContainer: {
        marginTop: 25
    }
})