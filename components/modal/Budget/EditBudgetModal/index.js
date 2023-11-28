import React from 'react';
import { Modal, View, Pressable, Text, StyleSheet } from 'react-native';
import { useState, useContext } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import EditButton from '../../../atoms/EditButton';
import BudgetForm from '../../../molecules/BudgetForm';
import { DarkModeContext } from '../../../../context/darkMode';

export default function EditBudgetModal({
    onClose,
    budget,
    visible,
    handleUpdateSuccess
}) {

    const handleCloseEditModal = () => {
        setIsEditModalVisible(false);
    };


    const openEditModal = () => {
        setIsEditModalVisible(true);
    };

    const closeModal = () => {
        onClose();
        handleUpdateSuccess();
    };

    const { isDarkMode } = useContext(DarkModeContext);

    return (
        <Modal
            animationType="slide-right"
            transparent={false}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={isDarkMode ? styles.modalHeaderDark : styles.modalHeader}>
                    <Pressable style={styles.closeButton} onPress={onClose}>
                        {
                            isDarkMode ? <Icon name='arrow-left' size={20} color='#CFCFCF' />
                                : <Icon name='arrow-left' size={20} color='#000' />
                        }
                    </Pressable>
                    <Text style={isDarkMode ? styles.headerTitleDark : styles.headerTitle}>{budget.budgetTitle}</Text>
                </View>
                <BudgetForm
                    budgetData={budget}
                    closeModal={closeModal}
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
    modalHeaderDark: {
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
        backgroundColor: "#212121"
    },
    headerTitle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'left',
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center',
        // paddingLeft: 40,
        paddingRight: 55
    },
    headerTitleDark: {
        flex: 1,
        fontSize: 18,
        textAlign: 'left',
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center',
        // paddingLeft: 40,
        paddingRight: 55,
        color: "#CFCFCF"
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