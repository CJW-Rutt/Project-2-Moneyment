import ManageBudget from "../../atoms/BudgetButton";
import { StyleSheet, Text, View, Pressable, Modal } from 'react-native';
import { useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome5'
import BudgetForm from "../BudgetForm";
import StackedChart from "../../atoms/StackedBarChart";

export default function ManageBudgetCard({ onAddBudget, totalBudget, remainingBudget }) {

    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <View style={styles.manageContainer}>

            <View style={styles.manageLeftCol}>

                <View style={styles.budgetRow}>
                    <Text style={styles.remainingTitle}>Remaining Budget:</Text>
                    <Text style={styles.remainingAmt}>${remainingBudget.toFixed(2)}</Text>
                </View>
            </View>
            <Pressable onPress={() => openModal()}>
                <View style={styles.manageRightCol}>
                    <Text
                        style={{
                            color: '#fff',
                            borderWidth: 1,
                            borderColor: '#fff',
                            borderRadius: 25,
                            padding: 10,
                        }}
                    >Add Budget</Text>
                </View>
            </Pressable>

            {/* Modal Begins */}
            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalHeader}>
                        <Pressable style={styles.closeButton} onPress={closeModal}>
                            <Icon name='arrow-left' size={25} color='#000' />
                        </Pressable>
                        <Text style={styles.headerTitle}>Add Budget</Text>
                    </View>
                    <BudgetForm onAddBudget={onAddBudget} closeModal={closeModal} />
                </View>
            </Modal>
            {/* Modal Ends */}

        </View>

    );
}

const styles = StyleSheet.create({
    manageContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#6AB4AC',
        borderBottomLeftRadius: 15,
        borderTopRightRadius: 15,
        padding: 20,
        marginTop: 20,
        width: 349,
        height: 200,
        minHeight: 200,
    },
    totalRow: {
        flex: 1,
        flexDirection: 'row',
    },
    budgetTotal: {
        color: '#fff',
        fontSize: 12,
    },
    remainingTitle: {
        fontSize: 14,
        color: '#fff',
    },
    remainingAmt: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#fff',
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

