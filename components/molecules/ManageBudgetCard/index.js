import ManageBudget from "../../atoms/BudgetButton";
import { StyleSheet, View, Pressable, Modal } from 'react-native';
import { useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome5'
import BudgetForm from "../BudgetForm";
import StackedChart from "../../atoms/StackedBarChart";
import { Text } from "react-native-paper";
import { DarkModeContext } from '../../../context/darkMode';
import { useContext } from "react";
import { useTheme } from "react-native-paper";
import TopHeader from "../TopHeader";

export default function ManageBudgetCard({ onAddBudget, totalBudget, remainingBudget, totalSpent }) {

    const { isDarkMode } = useContext(DarkModeContext);
    const theme = useTheme();

    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const darkButton = {
        color: '#fff',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 25,
        padding: 10,
    }
    const lightButton = {
        color: '#000',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 25,
        padding: 10,
    }

    return (
        <View style={styles.manageContainer}>
            {/* {console.log('Theme: ', theme.colors)} */}
            <View style={styles.manageLeftCol}>
                <View style={styles.budgetRow}>
                    <Text style={styles.remainingTitle}>Remaining Budget</Text>
                    <Text style={styles.remainingAmt}>${remainingBudget.toFixed(2)}</Text>
                </View>
            </View>
            {/* <Pressable onPress={() => openModal()}>
                <View style={styles.manageRightCol}>
                    <Text
                        style={isDarkMode ? darkButton : lightButton}
                    >Add Budget</Text>
                </View>
            </Pressable> */}

            {/* Modal Begins */}
            {/* <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
                onRequestClose={closeModal}
            // contentContainerStyle={{ backgroundColor: theme.colors.background }}
            >
                <View style={[styles.modalContainer, { backgroundColor: theme.colors.background }]}>
                    <TopHeader
                        title='New Budget'
                        type='close'
                        func={closeModal}
                    />
                    <BudgetForm onAddBudget={onAddBudget} closeModal={closeModal} />
                </View>
            </Modal> */}
            {/* Modal Ends */}

        </View>

    );
}

const styles = StyleSheet.create({
    manageContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    totalRow: {
        flex: 1,
        flexDirection: 'row',
    },
    budgetTotal: {

        fontSize: 12,
    },
    remainingTitle: {
        fontSize: 14,
        color: '#707070',
    },
    remainingAmt: {
        fontSize: 36,
        fontWeight: '800',
        marginBottom: 10
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
        width: '100%',
        paddingLeft: 110
    },
    closeButton: {
        paddingLeft: 80
    },


});

