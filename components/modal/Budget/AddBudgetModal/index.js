import React from 'react';
import { Modal, View, StyleSheet, Pressable } from 'react-native';
import BudgetForm from '../../../molecules/BudgetForm';
import { DarkModeContext } from '../../../../context/darkMode';
import { useContext } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Text } from 'react-native-paper';



export default function AddBudgetModal({ visible, onClose, addBudget }) {

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
                    <Text style={styles.headerTitle}>New Budget</Text>
                </View>
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
    },
    modalHeader: {
        flex: 1,
        flexDirection: 'row',
        maxHeight: 90,
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
        maxHeight: 90,
        width: '100%',
        borderBottomWidth: 1,
        borderColor: 'lightgray',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingBottom: 15,
        gap: 10,
        backgroundColor: "#212121",
    },
    headerTitle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'left',
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center',
        paddingRight: 45
    },
    closeButton: {
        marginTop: 20,
        paddingLeft: 20
    }
});
