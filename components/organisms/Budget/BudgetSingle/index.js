import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from "react-native";
import TransactionsCard from "../../../molecules/TransactionsCard";
import BudgetSingleSegment from "../BudgetSingleSegment";
import { collection, query, onSnapshot, getFirestore } from "firebase/firestore";

export default function BudgetSingle({ budget }) {
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

    return (
        <View style={styles.container}>
            <View style={styles.barGraphContainer}>
                <BudgetSingleSegment budget={budget} />
            </View>
            <Text style={styles.heading}>Transactions</Text>
            <View style={styles.transactionCardContainer}>
                <TransactionsCard transactions={transactions} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    transactionCardContainer: {
        zIndex: 1,
        paddingLeft: 20,
        paddingRight: 20
    },
    barGraphContainer: {
        // marginTop: 25
    },
    heading: {
        fontSize: 16,
        fontWeight: 'bold',
        width: 350,
        marginTop: 25,
        marginBottom: 10
    }
})