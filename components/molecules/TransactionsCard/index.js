import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import TransactionSpending from "../../atoms/TransactionSpending";

export default function TransactionsCard({ transactions }) {
    const windowWidth = Dimensions.get('window').width;

    if (!transactions || Object.keys(transactions).length === 0) {
        return <Text>No transactions available</Text>;
    }

    return (
        <View style={styles.container}>
            <View style={[styles.sheet, { width: windowWidth }]}>
                <ScrollView>
                    {
                        Object.entries(transactions).map(([date, transactionArray], index) => (
                            <View key={index}>
                                <Text style={styles.date}>{date}</Text>
                                {
                                    transactionArray.map((item, transactionIndex) => (
                                        <View key={transactionIndex}>
                                            <TransactionSpending
                                                category={item.budget}
                                                location={item.store} 
                                                amount={item.price}
                                                payment={item.price} 
                                            />
                                        </View>
                                    ))
                                }
                                {
                                    index < Object.entries(transactions).length - 1 && (
                                        <View style={{
                                            borderBottomColor: 'black',
                                            borderBottomWidth: StyleSheet.hairlineWidth,
                                            marginTop: 19,
                                            marginBottom: 19
                                        }}></View>
                                    )
                                }
                            </View>
                        ))
                    }
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