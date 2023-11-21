import { View, StyleSheet } from "react-native"
import CategoryContainer from "../CategoryContainer"
import IconContainer from "../IconContainer"
import { Text } from "react-native-paper"

export default function TransactionSpending({ category = 'Credit Card', location = 'Starbucks', amount = '13.70' }) {

    let categoryIcon = category.toLowerCase()

    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <View style={styles.leftContainer}>
                    <View style={styles.transactionInfo}>
                        <Text style={styles.itemText}>{location}</Text>
                        <View style={styles.transactionDetails}>
                            <Text style={styles.transactionCategory}>{category}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.amountContainer}>
                    <Text style={styles.amount}>-${amount}</Text>

                </View>


            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 45,
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        lignContent: 'center',
        paddingRight: 10,
    },
    cardContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    leftContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
    },
    transactionInfo: {
        flexDirection: 'column',
    },
    transactionDetails: {
        flexDirection: 'row',
    },
    transactionCategory: {
        fontSize: 12,
        color: "#707070"
    },
    itemText: {
        fontSize: 14,
        fontWeight: '800'
    },
    amount: {
        fontSize: 14,
        textAlign: 'right'
    },
    amountContainer: {
        flexDirection: 'row',
    },

})