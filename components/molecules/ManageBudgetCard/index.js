import ManageBudget from "../../atoms/BudgetButton";
import { StyleSheet, Text, View } from 'react-native';

export default function ManageBudgetCard() {
    return (
        <View style={styles.manageContainer}>
            <View style={styles.manageLeftCol}>
                <View style={styles.totalRow}>
                    <Text style={styles.budgetTotal}>Total Budget: </Text>
                    <Text style={styles.budgetTotal}>$2500</Text>
                </View>
                <View style={styles.budgetRow}>
                    <Text style={styles.remainingTitle}>Remaining Budget</Text>
                    <Text style={styles.remainingAmt}>$200</Text>
                </View>
            </View>
            <View style={styles.manageRightCol}>
                <Text style={{color: '#fff', borderWidth: 1, borderColor: '#fff', borderRadius: 25, padding: 10,}}>Manage Budget</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    manageContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#6AB4AC',
        borderBottomLeftRadius: 15,
        borderTopRightRadius: 15,
        padding: 20,
        marginTop: 20,
        width: 349,
        maxHeight: 200,
    },
    totalRow: {
        flex: 1,
        flexDirection: 'row',
    },
    budgetTotal: {
        color: '#fff',
        fontSize: 12,
    },
    remainingTitle: {
        fontSize: 14,
        color: '#fff',
    },
    remainingAmt: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#fff',
    }

});

