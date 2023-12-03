import { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, Dimensions } from "react-native";
import CategoryContainer from "../../atoms/CategoryContainer";
import TransactionSpending from "../../atoms/TransactionSpending";
import { collection, query, onSnapshot, getFirestore } from "firebase/firestore";
import { DarkModeContext } from '../../../context/darkMode';
import { useContext } from 'react'
import { Text } from 'react-native-paper';


export default function TransactionsCardHome() {

    const { isDarkMode } = useContext(DarkModeContext);

    const windowWidth = Dimensions.get('window').width; // replace with SIZES.width from constants
    const [transactions, setTransactions] = useState({});

    useEffect(() => {
        const db = getFirestore();
        const q = query(collection(db, "transactions"));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const newTransactions = {};
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                const date = data.date;
                if (!newTransactions[date]) {
                    newTransactions[date] = [];
                }
                newTransactions[date].push({ id: doc.id, ...data });
            });
            setTransactions(newTransactions);
        });

        return () => unsubscribe();
    }, []);

    if (!transactions || Object.keys(transactions).length === 0) {
        return <Text>No transactions available</Text>;
    }

    return (
        <View style={styles.container}>
            <View style={[styles.sheet, { width: windowWidth }]}>
                <ScrollView>
                    {
                        Object.entries(transactions).map(([date, transactionArray], index) => (
                            <View key={index} style={styles.dayContainer}>
                                <Text style={isDarkMode ? styles.dateDark : styles.date}>{date}</Text>
                                {
                                    transactionArray.map((item, transactionIndex) => (
                                        <View key={transactionIndex} style={styles.transaction}>
                                            <CategoryContainer style={styles.icon} category={item.category} size="s" />
                                            <TransactionSpending
                                                category={item.type}
                                                location={item.store}
                                                amount={item.price}
                                            />
                                        </View>
                                    ))
                                }
                                {
                                    index < Object.entries(transactions).length - 1 && (
                                        <View style={
                                            isDarkMode ? {
                                                borderBottomColor: '#535353',
                                                borderBottomWidth: StyleSheet.hairlineWidth,
                                                marginTop: 10,
                                                marginBottom: 15,
                                                width: 350
                                            } : {
                                                borderBottomColor: 'darkGrey',
                                                borderBottomWidth: StyleSheet.hairlineWidth,
                                                marginTop: 10,
                                                marginBottom: 15,
                                                width: 350
                                            }
                                        }></View>
                                    )
                                }
                            </View>
                        ))
                    }
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    sheet: {
        // backgroundColor: 'blue',
        minHeight: 200,
        alignContents: 'center',
        // maxHeight: 500,
        paddingLeft: 20,
        paddingRight: 20,
        width: 370
    },
    container: {
        flex: 1,
        alignContents: 'center',
        borderBottomColor: 'darkGrey',
        width: '100%',
        paddingBottom: 150
    },
    dayContainer: {
        width: '100%',
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
    dateDark: {
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 10,
        color: "#CFCFCF"
    }
})