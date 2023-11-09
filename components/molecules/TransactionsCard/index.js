import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";

import TransactionSpending from "../../atoms/TransactionSpending";

export default function TransactionsCard({
    arr = [{
        today: [{
            category: 'Credit Card',
            location: 'Starbucks',
            amount: '3.10',

        },
        {
            category: 'Credit Card',
            location: 'Subway',
            amount: '7.60',

        },
        ],
        Saturday: [{
            category: 'Credit Card',
            location: 'Starbucks',
            amount: '3.10',

        },
        ],
        Friday: [{
            category: 'Credit Card',
            location: 'Best Buy',
            amount: '83.10',

        },
        {
            category: 'Credit Card',
            location: 'Pizza Hut',
            amount: '3.10',

        }
        ],
    }
    ]
}) {

    const datesObj = arr[0]
    const windowWidth = Dimensions.get('window').width;

    return (
        <View style={styles.container}>
            <View style={[styles.sheet, { width: windowWidth }]}>

                <ScrollView>
                    <View>
                        <Text style={styles.date}>October 26</Text>
                        {
                            datesObj.today.map((item, index) => {
                                return (
                                    <View key={index}>
                                        <TransactionSpending
                                            location={item.location} amount={item.amount}
                                            category={item.category}
                                            payment={item.payment} />
                                    </View>
                                )
                            })
                        }
                    </View>
                    <View style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        marginTop: 19,
                        marginBottom: 19
                    }}></View>
                    <View>
                        <Text style={styles.date}>October 13</Text>
                        {
                            datesObj.Saturday.map((item, index) => {
                                return (
                                    <View key={index}>
                                        <TransactionSpending
                                            category={item.category}
                                            location={item.location} amount={item.amount}
                                            payment={item.payment} />
                                    </View>
                                )
                            })
                        }
                    </View>
                    <View style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        marginTop: 19,
                        marginBottom: 19
                    }}></View>
                    <View>
                        <Text style={styles.date}>October 10</Text>
                        {
                            datesObj.Friday.map((item, index) => {
                                return (
                                    <View key={index}>
                                        <TransactionSpending
                                            category={item.category}
                                            location={item.location} amount={item.amount}
                                            payment={item.payment} />
                                    </View>
                                )
                            })
                        }
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    sheet: {
        backgroundColor: 'white',
        height: 400,
        minHeight: 400,
        maxHeight: 400,


    },
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
        paddingTop: 30,
        paddingLeft: 30,
        paddingBottom: 30
    },
    date: {
        paddingLeft: 18,
        paddingBottom: 16,
        fontWeight: '500'
    }
})