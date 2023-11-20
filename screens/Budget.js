import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Modal, useColorScheme, Pressable } from 'react-native';
import { useState, useContext } from 'react';
import { Image } from 'expo-image';
import Icon from 'react-native-vector-icons/FontAwesome5'
import EditButton from '../components/atoms/EditButton'
import BudgetSingle from '../components/organisms/Budget/BudgetSingle';
import BudgetCard from '../components/molecules/BudgetCard';
import ManageBudgetCard from '../components/molecules/ManageBudgetCard';
import BudgetSingleTemplate from '../components/templates/Budget/BudgetSingleTemplate';
import { ScrollView } from 'react-native-gesture-handler';
import StackedChart from '../components/atoms/StackedBarChart'
import TopHeader from '../components/molecules/TopHeader';
import { Text } from 'react-native-paper';
import { DarkModeContext } from '../context/darkMode';
import { useTheme } from "react-native-paper";
import BudgetForm from "../components/molecules/BudgetForm";


export default function Budget() {

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
        // borderWidth: 1,
        // borderColor: '#fff',
        // borderRadius: 25,
        padding: 5,
        paddingRight: 15,
        fontSize: 12,
        fontWeight: 'bold'
    }
    const lightButton = {
        color: '#000',
        // borderWidth: 1,
        // borderColor: '#000',
        // borderRadius: 25,
        padding: 5,
        paddingRight: 15,
        fontSize: 12,
        fontWeight: 'bold'
    }

    const [budgets, setBudgets] = useState([
        {
            budgetTitle: "Coffee",
            budgetCategory: "Coffee",
            totalPrice: 50.45,
            totalBudget: 500.00
        },
        {
            budgetTitle: "Food",
            budgetCategory: "Food",
            totalPrice: 578.00,
            totalBudget: 1500.00
        },
        {
            budgetTitle: "Cheese",
            budgetCategory: "Cheese",
            totalPrice: 1570.00,
            totalBudget: 5000.00
        },
        {
            budgetTitle: "Wine",
            budgetCategory: "Wine",
            totalPrice: 4570.00,
            totalBudget: 5000.00
        },
    ]);

    const totalBudgetSum = budgets.reduce((acc, budget) => acc + budget.totalBudget, 0);
    const totalPriceSum = budgets.reduce((acc, budget) => acc + budget.totalPrice, 0);
    const remainingBudget = totalBudgetSum - totalPriceSum;

    const calculateProgress = (totalBudget, totalPrice) => {
        const budget = parseFloat(totalBudget);
        const spent = parseFloat(totalPrice);
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

    const addBudget = (newBudget) => {
        setBudgets([...budgets, newBudget]);
    };

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
                        // onAddBudget={addBudget}
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

                        {/* Modal Begins */}
                        <Modal
                            animationType="slide"
                            transparent={false}
                            visible={modalVisible}
                            onRequestClose={closeNewModal}
                        // contentContainerStyle={{ backgroundColor: theme.colors.background }}
                        >
                            <View style={[styles.modalContainer, { backgroundColor: theme.colors.background }]}>
                                <TopHeader
                                    title='New Budget'
                                    type='close'
                                    func={closeNewModal}
                                />
                                <BudgetForm onAddBudget={addBudget} closeModal={closeNewModal} />
                            </View>
                        </Modal>
                        {/* Modal Ends */}


                        {budgets.map((budgetItem, index) => (
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
                                {/* Modal Popup - Budget Single */}
                                <Modal
                                    animationType="slide"
                                    transparent={false}
                                    visible={activeModalIndex === index}
                                    onRequestClose={closeModal}
                                >
                                    <View style={styles.modalContainer}>
                                        <View style={styles.modalHeader}>
                                            <Pressable style={styles.closeButton} onPress={closeModal}>
                                                <Icon name='arrow-left' size={25} color='#000' />
                                            </Pressable>
                                            <Text style={styles.headerTitle}>{budgetItem.budgetTitle}</Text>
                                            <EditButton style={styles.editButton} onPress={() => openEdit()} />

                                        </View>
                                        <BudgetSingleTemplate
                                            budget={{
                                                budgetTitle: budgetItem.budgetTitle,
                                                totalBudget: budgetItem.totalBudget,
                                                totalPrice: budgetItem.totalPrice,
                                                progress: calculateProgress(budgetItem.totalBudget, budgetItem.totalPrice),

                                            }} />
                                    </View>
                                </Modal>
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
        fontSize: 16,
        fontWeight: 'bold',
    },
    desc: {
        fontSize: 12,
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
        marginTop: 5
    },
    manageRightCol: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: "100%"
    }

});
