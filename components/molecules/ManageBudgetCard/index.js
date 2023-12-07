import { StyleSheet, View, Pressable, Modal } from 'react-native';
import { useState } from "react";
import { Text } from "react-native-paper";
import { DarkModeContext } from '../../../context/darkMode';
import { useContext } from "react";
import { useTheme } from "react-native-paper";
import TopHeader from "../TopHeader";

export default function ManageBudgetCard({ remainingBudget = 0 }) {

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
            <View style={styles.manageLeftCol}>
                <View style={styles.budgetRow}>
                    <Text style={isDarkMode ? styles.remainingTitleDark : styles.remainingTitle}>Remaining Budget</Text>
                    <Text style={styles.remainingAmt}>${remainingBudget.toFixed(2)}</Text>
                </View>
            </View>
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
    remainingTitleDark: {
        fontSize: 14,
        color: '#CFCFCF',
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

