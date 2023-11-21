import React from 'react';
import { Modal, View, Pressable, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import EditButton from '../../../atoms/EditButton';
import BudgetForm from '../../../molecules/BudgetForm';

export default function EditBudgetModal ({ 
    onClose,
    budget,
    onUpdateBudget,
    visible,
    handleUpdateSuccess
}) {

    const [isEditModalVisible, setIsEditModalVisible] = useState(false);
    
    const handleCloseEditModal = () => {
        setIsEditModalVisible(false);
    };
    

    const openEditModal = () => {
        setIsEditModalVisible(true);
    };

    const closeModal = () => {
        onClose(); // Close this modal
        handleUpdateSuccess(); // Notify parent to close its modal
    };

    return (
        <Modal
            animationType="slide-right"
            transparent={false}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalHeader}>
                    <Pressable style={styles.closeButton} onPress={onClose}>
                        <Icon name='arrow-left' size={25} color='#000' />
                    </Pressable>
                    <Text style={styles.headerTitle}>{budget.budgetTitle}</Text>
                    <EditButton style={styles.editButton} onPress={openEditModal} />
                </View>
                <BudgetForm 
                    budgetData={budget} 
                    onSave={onUpdateBudget} 
                    closeModal={closeModal}
                    onUpdateBudget={onUpdateBudget}
                    onSaveSuccess={handleUpdateSuccess}
                    onClose={handleCloseEditModal}
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