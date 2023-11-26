import { useState, useEffect, useMemo } from 'react';

const transactionList = []

export const useTransactions = () => {
    const [transactions, setTransactions] = useState(transactionList);

    useEffect(() => {
        console.log("Updated transactions:", transactions);
    }, [transactions]);

    const addTransaction = (newTransaction) => {
        setTransactions(currentTransactions => [...currentTransactions, newTransaction]);
    };

    const groupedTransactions = useMemo(() => {
        return transactions.reduce((acc, transaction) => {
            const date = transaction.date;
            if (!acc[date]) {
                acc[date] = [];
            }
            acc[date].push(transaction);
            return acc;
        }, {});
    }, [transactions]);

    return { transactions: groupedTransactions, addTransaction };
};