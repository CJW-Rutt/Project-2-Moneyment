import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from "react-native";
import TransactionsCard from "../../../molecules/TransactionsCard";
import BudgetSingleSegment from "../BudgetSingleSegment";
import { collection, query, onSnapshot, getFirestore } from "firebase/firestore";

import { DarkModeContext } from '../../../../context/darkMode';
import { useContext } from "react";

export default function BudgetSingle({ budget }) {
    const [transactions, setTransactions] = useState({});
    const { isDarkMode } = useContext(DarkModeContext);
    const [history, setHistory] = useState()

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
        // console.log("transactions", transactions)
        return () => unsubscribe();
    }, []);

    let arr = []
    const filteredTransaction = {}

    const getHistory = () => {
        Object.entries(transactions).map(i => {
            i[1].map((j, index) => {
                if (i[1][index].budget.toLowerCase() !== budget.budgetTitle.toLowerCase()) {
                    // console.log('i is', i) 
                    //i is ["December 5, 2023", [{"budget": "Mom", "date": "December 5, 2023", "id": "LZjID8NHnOyK4PJObYuP", "price": 45, "store": "La Foret", "time": 1701810606041, "type": "Credit Card"}, {"budget": "Books", "date": "December 5, 2023", "id": "PWkqPJ0OTybX49eNBSYH", "price": 5, "store": "Walmart", "time": 1701811574440, "type": "Cash"}]]

                } else if (i[1][index].budget.toLowerCase() === budget.budgetTitle.toLowerCase() && i[0] === i[1][index].date) {
                    // console.log('ITEM IS HERE!!!', i[1][index])
                    arr.push(i[1][index])

                    let filterArr = arr.filter(a => a.date === i[0])

                    // console.log('ARR IS HERE!!!!!', arr)
                    makeObj(i, filterArr)
                }
            })
        })
        console.log('filteredTransaction is', filteredTransaction)
        console.log(Object.entries(filteredTransaction)) //[["December 7, 2023", [[Object]]]]
    }

    const makeObj = (item, arr) => filteredTransaction[item[0]] = arr

    const trimArr = (arr) => {
        return arr.filter((j) => {
            j.budget.toLowerCase() !== budget.budgetTitle.toLowerCase()
        })
    }

    useEffect(() => {
        getHistory()
        setHistory(filteredTransaction)
    }, [transactions])

    return (
        <View style={styles.container}>
            <View style={styles.barGraphContainer}>
                <BudgetSingleSegment budget={budget} />
            </View>
            <Text style={isDarkMode ? styles.headingDark : styles.heading}>Transactions</Text>
            <View style={styles.transactionCardContainer}>
                {/* {console.log('transaction before passing', history)} */}
                <TransactionsCard transactions={history} />
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
    },
    headingDark: {
        fontSize: 16,
        fontWeight: 'bold',
        width: 350,
        marginTop: 25,
        marginBottom: 10,
        color: "#CFCFCF"
    }
})