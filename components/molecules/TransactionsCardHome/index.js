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
                        <View key={index}>
                            <Text style={styles.date}>{date}</Text>
                            {transactions.map((item, transactionIndex) => (
                                <View style={styles.transaction} key={transactionIndex}>
                                    <View style={styles.icon} >
                                        <CategoryContainer category={item.category} size="s" />
                                    </View>
                                    <View>
                                        <TransactionSpending
                                            category={item.category}
                                            location={item.location}
                                            amount={item.amount}
                                            payment={item.payment}
                                        />
                                    </View>

                                </View>

                            ))}
                            {index < Object.entries(datesObj).length - 1 && (
                                <View style={{
                                    borderBottomColor: 'darkGrey',
                                    borderBottomWidth: StyleSheet.hairlineWidth,
                                    marginTop: 19,
                                    marginBottom: 19
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
        minHeight: 400,
        maxHeight: 10000,
        marginLeft: 15


    },
    container: {
        flex: 1,
        alignItems: 'center',
        borderBottomColor: 'darkGrey',



    },
    title: {
        fontSize: 16,
        fontWeight: '700',
        paddingTop: 30,
        paddingLeft: 30,
        paddingBottom: 30,

    },
    transaction: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex'
    },
    date: {
        paddingLeft: 18,
        paddingBottom: 16,
        fontWeight: '500'
    },
    icon: {
        marginLeft: 40,
        marginTop: 6
    }
})