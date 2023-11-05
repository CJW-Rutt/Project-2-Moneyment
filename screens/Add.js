import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Modal, Pressable } from 'react-native';
import { Image } from "expo-image"
import Icon from 'react-native-vector-icons/FontAwesome5'

import AddTransactionSingle from '../components/organisms/Add/AddTransactionSingle';
import LongTextButton from '../components/atoms/LongTextButton';


export default function Add({ navigation }) {
    const [isAddTransactionVisible, setAddTransactionVisible] = useState(false);
    
    const openAddTransaction = () => {
        setAddTransactionVisible(true);
    };

    const closeAddTransaction = () => {
        setAddTransactionVisible(false);
    };
    
    return (

        <View style={styles.container}>
            {/* <Text style={styles.title}>Integrations</Text>
            <Text style={styles.desc}>Explore a seamless options to input your information into the app, tailored just the way you need it!</Text>
            <View style={styles.buttonContainer}>
                <LongTextButton type="transactions" onPress={openAddTransaction} />
                <LongTextButton type="accounts" />
            </View>
            <Image source={require("../assets/graphics/people/selfie.png")} alt='' style={{width: 358, height: 250, marginTop: 10,}} contentFit="contain" />
            <Modal animationType="slide" transparent={false} visible={isAddTransactionVisible}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalHeader}>
                        <Pressable style={styles.closeButton} onPress={closeAddTransaction}>
                            <Icon name='arrow-left' size={25} color='#000' />
                        </Pressable>
                        <Text style={styles.headerTitle}>Add Transaction</Text>
                    </View>
                    <AddTransactionSingle />
                </View>
            </Modal> */}
            <AddTransactionSingle />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
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
        justifyContent: 'space-between',
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
        paddingLeft: 80
    },
    closeButton: {
        paddingLeft: 80
    }
});
