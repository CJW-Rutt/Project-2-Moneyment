import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useState, useContext, useEffect } from 'react';
import { collection, query, where, onSnapshot, getFirestore } from "firebase/firestore";
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
    
        const rawBudgets = budgets.map(budget => {
            const totalSpent = transactions.reduce((acc, transaction) => {
                if (transaction.budget === budget.name) {
                    return acc + transaction.price;
                }
                return acc;
            }, 0);
    
            noBudgetTotal += transactions.reduce((acc, transaction) => {
                return transaction.budget === budget.name ? acc : acc + transaction.price;
            }, 0);
    
            return {
                ...budget,
                spent: totalSpent,
                left: budget.amount - totalSpent
            };
        });
    
        rawBudgets.push({
            name: "No Budget",
            amount: noBudgetTotal,
            spent: noBudgetTotal,
            left: 0
        });
    
        setDisplayedBudgets(rawBudgets);
    };

    useEffect(() => {
        const db = getFirestore();
        const unsubscribe = onSnapshot(collection(db, "budgets"), (snapshot) => {
            const budgetsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setBudgets(budgetsData);
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const db = getFirestore();
        const unsubscribe = onSnapshot(collection(db, "transactions"), (snapshot) => {
            const transactionsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setTransactions(transactionsData);
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        aggregateData();
    }, [budgets, transactions]);

    const { isDarkMode } = useContext(DarkModeContext);
    const theme = useTheme();

    const [modalVisible, setModalVisible] = useState(false);

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

    const totalBudgetSum = budgets.reduce((acc, budget) => acc + budget.totalBudget, 0);
    const totalPriceSum = budgets.reduce((acc, budget) => acc + budget.totalPrice, 0);
    const remainingBudget = totalBudgetSum - totalPriceSum;

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

    // const updateBudget = (updatedBudget) => {
    //     const updatedBudgets = budgets.map((item) => {
    //         if (item.budgetTitle === updatedBudget.budgetTitle) {
    //             return updatedBudget;
    //         }
    //         return item;
    //     });
    //     setBudgets(updatedBudgets);
    // };

    return (

        <View style={styles.container}>
            <TopHeader title='Budget' />
            <View style={styles.topContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Smart Budgeting</Text>
                    <Text style={styles.desc}>Visualize your budgets and analyze your remaining spending within specific timeframes</Text>
                </View>
                <ScrollView>
                    <ManageBudgetCard
                        totalBudget={totalBudgetSum}
                        remainingBudget={remainingBudget}
                    />
                    <View styles={styles.chart}>
                        <StackedChart totalBudget={totalBudgetSum} totalSpent={totalPriceSum} />
                    </View>
                    <View style={styles.budgetcontainer}>
                        <Pressable onPress={() => openNewModal()}>
                            <View style={styles.manageRightCol}>
                                <Text
                                    style={isDarkMode ? darkButton : lightButton}
                                >+ New Budget</Text>
                            </View>
                        </Pressable>
                        <AddBudgetModal
                            visible={modalVisible}
                            onClose={closeNewModal}
                            addBudget={addBudget}
                        />
                        {displayedBudgets.map((budgetItem, index) => (
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
                        ))}
                    </View>
                    <StatusBar />
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
