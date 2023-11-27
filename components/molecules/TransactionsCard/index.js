import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import TransactionSpending from "../../atoms/TransactionSpending";

import { DarkModeContext } from '../../../context/darkMode';
import { useContext } from "react";

export default function TransactionsCard({ transactions }) {
    const windowWidth = Dimensions.get('window').width;

    if (!transactions || Object.keys(transactions).length === 0) {
        return <Text>No transactions available</Text>;
    }

    const { isDarkMode } = useContext(DarkModeContext);

    return (
        <View style={styles.container}>
            <View style={[styles.sheet]}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        Object.entries(transactions).map(([date, transactionArray], index) => (
                            <View key={index}>
                                <Text style={isDarkMode ? styles.dateDark : styles.date}>{date}</Text>
                                {
                                    transactionArray.map((item, transactionIndex) => (
                                        <View key={transactionIndex}>
                                            <TransactionSpending
                                                category={item.budget}
                                                location={item.store}
                                                amount={item.price}
                                                payment={item.price}
                                            />
                                            {
                                                transactionArray[transactionIndex + 1] ? <View style={isDarkMode ? styles.dividerDark : styles.divider}></View> : <></>
                                            }
                                        </View>
                                    ))
                                }
                                {
                                    index < Object.entries(transactions).length - 1 && (
                                        <View style={{
                                            borderBottomColor: isDarkMode ? '#535353' : 'black',
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
        width: 350,
        height: 360,
    },
    container: {
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
        paddingTop: 30,
        paddingBottom: 30
    },
    date: {
        paddingBottom: 5,
        fontSize: 14,
        fontWeight: '500'
    },
    dateDark: {
        paddingBottom: 5,
        fontSize: 14,
        fontWeight: '500',
        color: "#CFCFCF"
    },
    divider: {
        borderBottomColor: "#F4F4F4",
        borderBottomWidth: 1,
        marginTop: 5,
        marginBottom: 5
    },
    dividerDark: {
        borderBottomColor: "#323232",
        borderBottomWidth: 0.5,
        marginTop: 5,
        marginBottom: 5
    }
})