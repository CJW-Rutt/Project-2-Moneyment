import { View, StyleSheet, ScrollView, Dimensions } from "react-native";
import { Text } from "react-native-paper";
import CategoryContainer from "../../atoms/CategoryContainer";

import TransactionSpending from "../../atoms/TransactionSpending";

export default function TransactionsCardHome({
    arr = [{
        Today: [{
            category: 'Coffee',
            location: 'Starbucks',
            amount: '3.10',

        },
        {
            category: 'Food',
            location: 'Subway',
            amount: '7.60',

        },
        ],
        "October 16th": [{
            category: 'Coffee',
            location: 'Starbucks',
            amount: '3.10',

        },
        ],
        "October 10th": [{
            category: 'Shopping',
            location: 'Best Buy',
            amount: '83.10',

        },
        {
            category: 'Food',
            location: 'Pizza Hut',
            amount: '3.10',

        }
        ],
    }
    ]
}) {


    const datesObj = arr[0];
    const windowWidth = Dimensions.get('window').width;

    return (
        <View style={styles.container}>
            <View style={[styles.sheet, { width: windowWidth }]}>
                <ScrollView>
                    {Object.entries(datesObj).map(([date, transactions], index) => (
                        <View key={index} style={styles.dayContainer}>
                            <Text style={styles.date}>{date}</Text>
                            {transactions.map((item, transactionIndex) => (
                                <View key={transactionIndex}>
                                    <View style={styles.transaction} >
                                        <CategoryContainer style={styles.icon} category={item.category} size="s" />
                                        <TransactionSpending
                                            category={item.category}
                                            location={item.location}
                                            amount={item.amount}
                                            payment={item.payment}
                                        />
                                    </View>
                                    {transactionIndex < transactions.length - 1 && (
                                        <View style={{
                                            borderBottomColor: '#F4F4F4',
                                            borderBottomWidth: StyleSheet.hairlineWidth,
                                            marginTop: 3,
                                            marginBottom: 3,
                                            width: { windowWidth },
                                        }}></View>
                                    )}
                                </View>
                            ))}
                            {index < Object.entries(datesObj).length - 1 && (
                                <View style={{
                                    borderBottomColor: 'darkGrey',
                                    borderBottomWidth: StyleSheet.hairlineWidth,
                                    marginTop: 10,
                                    marginBottom: 15,
                                    width: { windowWidth }
                                }}></View>
                            )}
                        </View>
                    ))}
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    sheet: {
        // backgroundColor: 'white',
        minHeight: 200,
        maxHeight: 500,
        paddingLeft: 20,
        paddingRIght: 20,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        borderBottomColor: 'darkGrey',
    },
    dayContainer: {
        width: 350
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
    },
    transaction: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        gap: 12,
        marginTop: 2,
        marginBottom: 2,
    },
    date: {
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 10
    },
})