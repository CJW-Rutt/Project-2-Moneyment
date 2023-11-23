import React from 'react';
import { Modal, View, StyleSheet } from 'react-native';
import TopHeader from '../../../molecules/TopHeader';
import BudgetForm from '../../../molecules/BudgetForm';

export default function AddBudgetModal({ visible, onClose, addBudget }) { 
    // console.log("AddBudgetModal addBudget:", addBudget);
    return (
        <Modal
            animationType="slide-right"
            transparent={false}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <TopHeader
                    title='New Budget'
                    type='close'
                    func={onClose}
                />
                <BudgetForm onSave={addBudget} closeModal={onClose} />
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
