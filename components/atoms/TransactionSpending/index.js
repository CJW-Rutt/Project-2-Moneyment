import { View, StyleSheet, Text } from "react-native"
import CategoryContainer from "../CategoryContainer"
import IconContainer from "../IconContainer"

export default function TransactionSpending({ category = 'Food', location = 'Starbucks', amount = '13.70', payment = 'td' }) {

    let categoryIcon = category.toLowerCase()
    const paymentObj = {
        td: 'tdMiniCard',
        cibc: 'cibcMiniCard',
        rbc: 'rbcMiniCard',
        cash: 'cashMiniCard'
    }

    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <View style={styles.leftContainer}>
                    <View style={styles.icon}>
                        <CategoryContainer category={categoryIcon} size='m' />
                    </View>
                    <View style={styles.transactionInfo}>
                        <Text style={styles.itemText}>{category}</Text>
                        <View style={styles.transactionDetails}>
                            <View>
                                <IconContainer icon={paymentObj[payment]} />
                            </View>
                            <Text style={{ paddingLeft: 3 }}>{location}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.amountContainer}>
                    <Text style={styles.amount}>-${amount}</Text>
                    <View style={styles.rightChevron} >
                        <IconContainer icon='chevronUp' size={17} colour='black' />
                    </View>
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
        backgroundColor: 'white'
    },
    cardContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    leftContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginLeft: 20,
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
        fontSize: 16
    },
    amount: {
        fontSize: 16,
        textAlign: 'right'
    },
    amountContainer: {
        flex: 1,
        flexDirection: 'row',
        maxWidth: 70,
        marginRight: 20,
        gap: 5
    },
    rightChevron: {
        transform: [{ rotate: '90deg' }],
    },
})