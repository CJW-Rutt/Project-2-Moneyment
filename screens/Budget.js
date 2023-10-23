import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Modal, useColorScheme, Pressable } from 'react-native';
import { useState } from 'react';
import { Image } from 'expo-image';
import Icon from 'react-native-vector-icons/FontAwesome5'

import BudgetSingle from '../components/organisms/Budget/BudgetSingle';
import BudgetCard from '../components/molecules/BudgetCard';
import ManageBudgetCard from '../components/molecules/ManageBudgetCard';
import { ScrollView } from 'react-native-gesture-handler';
import BudgetSingleTemplate from '../components/templates/Budget/BudgetSingleTemplate';

export default function Budget({ navigation }) {
    const colorScheme = useColorScheme();

    const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;

    const themeContainerStyle =
        colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

    const [visible, setVisible] = useState(false);

    const [isAddTransactionVisible, setAddTransactionVisible] = useState(false);
    
    const openAddTransaction = () => {
        setAddTransactionVisible(true);
    };

    const closeAddTransaction = () => {
        setAddTransactionVisible(false);
    };

    return (

        <View style={styles.container}>
            <Text style={styles.title}>Smart Budgeting</Text>
            <Text style={styles.desc}>Visualizing your budgets and analyze your remaining spending within specific timeframes</Text>
            <ManageBudgetCard />
            <BudgetCard onPress={openAddTransaction} />
            <BudgetCard onPress={openAddTransaction} />
            <Modal animationType="slide" transparent={false} visible={isAddTransactionVisible}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalHeader}>
                        <Pressable style={styles.closeButton} onPress={closeAddTransaction}>
                            <Icon name='arrow-left' size={25} color='#000' />
                        </Pressable>
                        <Text style={styles.headerTitle}>Coffee</Text>
                    </View>
                    <BudgetSingleTemplate />
                    <BudgetSingle />
                </View>
            </Modal>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 44,
    },
    title: {
        fontSize: 18,
        maxWidth: 355,
        fontWeight: 'bold',
        alignItems: 'flex-start',
        width: '100%',
        marginTop: 10,
    },
    desc: {
        fontSize: 12,
        marginTop: 10,
        maxWidth: 355,
        width: '100%',
    },
    modalContainer: {
        flex: 1,
       
    },
    modalHeader:{
        flex: 1,
        flexDirection: 'row',
        maxHeight: 100,
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
