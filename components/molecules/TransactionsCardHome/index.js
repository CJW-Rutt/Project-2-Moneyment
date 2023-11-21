import { useEffect } from 'react';
import { View, StyleSheet, ScrollView, Dimensions } from "react-native";
import CategoryContainer from "../../atoms/CategoryContainer";
import TransactionSpending from "../../atoms/TransactionSpending";
import { Text } from 'react-native-paper';

export default function TransactionsCardHome({ transactions }) {
    const windowWidth = Dimensions.get('window').width;

    useEffect(() => {
        console.log("Transactions updated in TransactionsCardHome:", transactions);
    }, [transactions]);
    
    if (!transactions || Object.keys(transactions).length === 0) {
        return <Text>No transactions available</Text>;
    }

    return (
        <View style={styles.container}>
            <View style={[styles.sheet, { width: windowWidth }]}>
                <ScrollView>
                    {Object.entries(transactions).map(([date, transactionArray], index) => (
                        <View key={index} style={styles.dayContainer}>
                            <Text style={styles.date}>{date}</Text>
                            {transactionArray.map((item, transactionIndex) => (
                                <View key={transactionIndex} style={styles.transaction}>
                                    <CategoryContainer style={styles.icon} category={item.category} size="s" />
                                    <TransactionSpending
                                        category={item.category}
                                        location={item.location}
                                        amount={item.amount}
                                    />
                                </View>
                            ))}
                            {index < Object.entries(transactions).length - 1 && (
                                <View style={{
                                    borderBottomColor: 'darkGrey',
                                    borderBottomWidth: StyleSheet.hairlineWidth,
                                    marginTop: 10,
                                    marginBottom: 15,
                                    width: windowWidth
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