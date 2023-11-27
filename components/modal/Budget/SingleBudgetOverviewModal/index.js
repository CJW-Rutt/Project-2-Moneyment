import React from 'react';
import { Modal, View, Pressable, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import EditButton from '../../../atoms/EditButton';
import BudgetSingleTemplate from '../../../templates/Budget/BudgetSingleTemplate';
import EditBudgetModal from '../EditBudgetModal';
import { useState } from 'react';

export default function SingleBudgetOverviewModal({
    index,
    activeModalIndex,
    onClose,
    budget,
    calculateProgress,
}) {

    console.log('SINGLEBUDGETDATA: ', budget)
    const [isEditModalVisible, setIsEditModalVisible] = useState(false);

    const toggleEditModal = () => {
        setIsEditModalVisible(!isEditModalVisible);
    };

    const handleUpdateSuccess = () => {
        setIsEditModalVisible(false);
        onClose();
    };

    return (
        <Modal
            animationType="slide-right"
            transparent={false}
            visible={activeModalIndex === index}
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalHeader}>
                    <Pressable style={styles.closeButton} onPress={onClose}>
                        <Icon name='arrow-left' size={20} color='#000' />
                    </Pressable>
                    <Text style={styles.headerTitle}>{budget.budgetTitle}</Text>
                    <EditButton style={styles.editButton} onPress={toggleEditModal} />
                    <EditBudgetModal
                        budget={{
                            budgetTitle: budget.budgetTitle,
                            totalBudget: budget.totalBudget,
                            totalPrice: budget.totalPrice,
                            progress: calculateProgress(budget.totalBudget, budget.totalPrice),
                            id: budget.id,
                        }}
                        index={index}
                        visible={isEditModalVisible}
                        onClose={toggleEditModal}
                        handleUpdateSuccess={handleUpdateSuccess}
                    />
                </View>
                <BudgetSingleTemplate
                    budget={{
                        budgetTitle: budget.budgetTitle,
                        totalBudget: budget.totalBudget,
                        totalPrice: budget.totalPrice,
                        progress: calculateProgress(budget.totalBudget, budget.totalPrice),
                        id: budget.id,
                    }}
                />
            </View>
        </Modal>
    );
};

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
        justifyContent: 'space-between',
    },
    modalHeader: {
        flex: 1,
        flexDirection: 'row',
        maxHeight: 70,
        width: '100%',
        borderBottomWidth: 1,
        borderColor: 'lightgray',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingBottom: 15,
        gap: 10,
    },
    headerTitle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'left',
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center',
        paddingLeft: 40
    },
    closeButton: {
        marginTop: 20,
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