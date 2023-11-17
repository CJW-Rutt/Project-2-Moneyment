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

                            <Text style={{ paddingLeft: 3 }}>{category}</Text>
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
        width: 382,
        maxWidth: 382,
        // backgroundColor: 'white'
    },
    cardContainer: {
        // width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 13,
        marginRight: 44
    },
    leftContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginLeft: 10,
        gap: 15,
        alignContent: 'center'
    },
    transactionInfo: {
        flexDirection: 'column',
        flex: 1,
        maxWidth: 400
    },
    transactionDetails: {
        flexDirection: 'row',
        maxWidth: 87,
    },
    itemText: {
        fontSize: 16,
    },
    amount: {
        fontSize: 16,
        textAlign: 'right'
    },
    amountContainer: {
        flex: 1,
        flexDirection: 'row',
        maxWidth: 70,
        gap: 5
    },

})