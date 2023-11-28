import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useState, useContext, useEffect } from 'react';
import { collection, query, where, onSnapshot, getFirestore } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

import { Text } from 'react-native-paper';
import { DarkModeContext } from '../context/darkMode';
import { useTheme } from "react-native-paper";

import BudgetCard from '../components/molecules/BudgetCard';
import ManageBudgetCard from '../components/molecules/ManageBudgetCard';
import StackedChart from '../components/atoms/StackedBarChart'
import TopHeader from '../components/molecules/TopHeader';
import AddBudgetModal from '../components/modal/Budget/AddBudgetModal';
import SingleBudgetOverviewModal from '../components/modal/Budget/SingleBudgetOverviewModal';


export default function Budget() {

    const [budgets, setBudgets] = useState([]);
    const [displayedBudgets, setDisplayedBudgets] = useState([]);
    const [transactions, setTransactions] = useState([]);

    const aggregateData = () => {
        let noBudgetTotal = 0;

        const updatedBudgets = budgets.map(budget => {
            const totalSpent = transactions.reduce((acc, transaction) => {
                if (transaction.budget === budget.name) {
                    return acc + (transaction.price || 0);
                }
                return acc;
            }, 0).toFixed(2);

            noBudgetTotal += transactions.reduce((acc, transaction) => {
                return transaction.budget === budget.name ? acc : acc + (transaction.price || 0);
            }, 0);

            return {
                ...budget,
                budgetTitle: budget.name,
                totalBudget: parseFloat(budget.amount.toFixed(2)),
                totalPrice: parseFloat(totalSpent),
                left: parseFloat((budget.amount - totalSpent).toFixed(2))
            };
        });

        updatedBudgets.push({
            budgetTitle: "No Budget",
            totalBudget: parseFloat(noBudgetTotal.toFixed(2)),
            totalPrice: parseFloat(noBudgetTotal.toFixed(2)),
            left: 0
        });

        setDisplayedBudgets(updatedBudgets);
    };

    useEffect(() => {
        const db = getFirestore();
        const unsubscribe = onSnapshot(collection(db, "budgets"), (snapshot) => {
            const budgetsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setBudgets(budgetsData);
            console.log('BUDGETS DATA: ', budgetsData);
        });

        return () => unsubscribe();

    }, []);

    useEffect(() => {
        const db = getFirestore();
        const unsubscribe = onSnapshot(collection(db, "transactions"), (snapshot) => {
            const transactionsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setTransactions(transactionsData);
            console.log('TRANSACTIONS DATA: ', transactionsData);
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        aggregateData();
    }, [budgets, transactions]);

    const { isDarkMode } = useContext(DarkModeContext);
    const theme = useTheme();

    const [modalVisible, setModalVisible] = useState(false);
    const [signedIn, setSignedIn] = useState(false)

    const openNewModal = () => {
        setModalVisible(true);
    };

    const closeNewModal = () => {
        setModalVisible(false);
    };

    const darkButton = {
        color: '#fff',
        padding: 5,
        paddingRight: 15,
        fontSize: 12,
        fontWeight: 'bold'
    }
    const lightButton = {
        color: '#000',
        padding: 5,
        paddingRight: 15,
        fontSize: 12,
        fontWeight: 'bold'
    }

    const addBudget = (newBudget) => {
        setBudgets([...budgets, newBudget]);
    };

    const totalBudgetSum = displayedBudgets.reduce((acc, budget) => {
        if (budget.budgetTitle !== "No Budget") {
            return acc + (budget.totalBudget || 0);
        }
        return acc;
    }, 0);

    const totalSpent = transactions.reduce((acc, transaction) => {
        return acc + (transaction.price || 0);
    }, 0);

    const totalPriceSum = totalSpent;

    const remainingBudget = totalBudgetSum - totalSpent;

    const calculateProgress = (totalBudget, totalPrice) => {
        const budget = parseFloat(totalBudget);
        const spent = parseFloat(totalPrice);
        if (!budget || !spent) return 0;
        return spent / budget;
    };

    const [activeBudgetEdit, setActiveBudgetEdit] = useState(null);

    const openEdit = (index) => {
        setActiveBudgetEdit(index);
    };

    const closeEdit = () => {
        setActiveBudgetEdit(null);
    };

    const [activeModalIndex, setActiveModalIndex] = useState(null);

    const openModal = (index) => {
        setActiveModalIndex(index);
    };

    const closeModal = () => {
        setActiveModalIndex(null);
    };

    const checkUser = async () => {
        await onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                console.log('signed in', uid)
                setSignedIn(true)
            } else {
                setSignedIn(false)
                console.log('not signed in')
            }
        })
    }

    useEffect(() => {
        checkUser()
        // console.log('signedIn on Budget.js is', signedIn)
    }, [])

    return (

        <View style={styles.container}>
            <TopHeader title='Budget' />
            <View style={styles.topContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.secondContainer}>
                        <View style={styles.textContainer}>
                            <Text style={styles.title}>Smart Budgeting</Text>
                            <Text style={isDarkMode ? styles.descDark : styles.desc}>Visualize your budgets and analyze your remaining spending within specific timeframes</Text>
                        </View>
                        <ManageBudgetCard
                            totalBudget={totalBudgetSum}
                            remainingBudget={remainingBudget}
                            totalSpent={totalSpent}
                        />
                        {
                            displayedBudgets.map((budgetItem, index) => (
                                <View key={index}>
                                    <BudgetCard
                                        budget={{
                                            budgetTitle: budgetItem.budgetTitle,
                                            totalBudget: budgetItem.totalBudget,
                                            totalPrice: budgetItem.totalPrice,
                                            progress: calculateProgress(budgetItem.totalBudget, budgetItem.totalPrice),
                                        }}
                                        onPress={() => openModal(index)}
                                    />
                                    <SingleBudgetOverviewModal
                                        index={index}
                                        activeModalIndex={activeModalIndex}
                                        onClose={closeModal}
                                        budget={budgetItem}
                                        onEdit={() => openEdit(index)}
                                        calculateProgress={calculateProgress}
                                        closeNewModal={closeNewModal}
                                        modalVisible={modalVisible}
                                        onAddBudget={addBudget}
                                    />
                                </View>
                            ))
                        }
                    </View>
                </ScrollView>
            </View>
        </View >

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    topContainer: {
        width: '100%',
        display: "flex",
        flexDirection: "column",
        padding: 20,
        paddingBottom: 10,
        gap: 15,
        height: 655
    },
    secondContainer: {
        width: '100%',
        display: "flex",
        flexDirection: "column",
        gap: 15,
    },
    textContainer: {
        gap: 3,
    },
    title: {
        fontSize: 21,
        fontWeight: 'bold',
    },
    desc: {
        fontSize: 14,
        color: "#707070"
    },
    descDark: {
        fontSize: 14,
        color: "#CFCFCF"
    },
    modalContainer: {
        flex: 1,
    },
    modalHeader: {
        flex: 1,
        flexDirection: 'row',
        maxHeight: 86,
        width: '100%',
        borderBottomWidth: 1,
        borderColor: 'lightgray',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingBottom: 15,
    },
    headerTitle: {
        fontSize: 18,
        textAlign: 'left',
        fontWeight: 'bold',
        width: '50%',
        paddingLeft: 90,
    },
    closeButton: {
        paddingLeft: 20

    },
    editButton: {
    },
    budgetcontainer: {
        borderTopWidth: 1,
        borderTopColor: '#F4F4F4',
        paddingTop: 5,
        marginTop: 5,
    },
    manageRightCol: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: "100%"
    }

});
