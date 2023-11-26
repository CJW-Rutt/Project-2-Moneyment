import { View, StyleSheet } from "react-native"
import { Text } from "react-native-paper"
import { DarkModeContext } from '../../../context/darkMode';
import { useContext } from 'react'

export default function TransactionSpending({ category, location, amount }) {

    const decimalAmount = (typeof amount === 'number') ? amount.toFixed(2) : '0.00';
    const { isDarkMode } = useContext(DarkModeContext);

    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <View style={styles.leftContainer}>
                    <View style={styles.transactionInfo}>
                        <Text style={styles.itemText}>{location}</Text>
                        <View style={styles.transactionDetails}>
                            <Text style={isDarkMode ? styles.transactionCategoryDark : styles.transactionCategory}>{category}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.amountContainer}>
                    <Text style={styles.amount}>-${decimalAmount}</Text>
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
    transactionCategoryDark: {
        fontSize: 12,
        color: "#CFCFCF"
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