import { StyleSheet, View, Button, Modal, Pressable } from 'react-native';
import { useState, useContext } from 'react';
import { Text } from 'react-native-paper';
import { Image } from "expo-image"
import Icon from 'react-native-vector-icons/FontAwesome5'
import ScanReceipt from '../../../templates/ScanReceipt';
import LongTextButton from '../../../atoms/LongTextButton';
import { DarkModeContext } from '../../../../context/darkMode';
import TransactionFormModal from '../../../modal/Add/TransactionFormModal';

export default function AddTransactionSingle() {
    const [showScan, setShowScan] = useState(false);
    const { isDarkMode } = useContext(DarkModeContext);
    const [showTransactionFormModal, setShowTransactionFormModal] = useState(false);

    const toggleTransactionFormModal = () => {
        setShowTransactionFormModal(!showTransactionFormModal);
    };

    const handleScan = () => {
        showScan ? setShowScan(false) : setShowScan(true)
    }

    const handleAddBudget = (newBudget) => {
        console.log("New budget added:", newBudget);
    };

    const postSaveHandler = () => {
        toggleTransactionFormModal();
    };

    return (
        <View style={styles.container}>
            {
                showScan ?
                    <>
                        <View style={styles.modalHeader}>
                            <Pressable style={styles.closeButton} onPress={handleScan}>
                                <Icon name='arrow-left' size={25} color='#000' />
                            </Pressable>
                            <Text style={styles.headerTitle}>Scan Receipt</Text>
                        </View>
                        <Modal animationType="slide" transparent={false} visible={showScan}>
                            <View style={styles.modalHeader}>
                                <Pressable style={styles.closeButton} onPress={handleScan}>
                                    <Icon name='arrow-left' size={25} color='#000' />
                                </Pressable>
                                <Text style={styles.headerTitle}>Scan Receipt</Text>
                            </View>
                            <ScanReceipt />
                        </Modal>
                    </> :
                    <>
                        {console.log('add transaction', isDarkMode)}
                        <Text style={styles.title}>What works better for you!</Text>
                        <Text style={styles.desc}>Choose the method tailored to your unique needs</Text>
                        <View style={styles.buttonContainer}>
                            <LongTextButton type="scan" onPress={() => setShowScan(true)} />
                            <LongTextButton type="manual" onPress={toggleTransactionFormModal} />
                        </View>
                        {isDarkMode === true ? <Image source={require("../../../../assets/graphics/people/selfieDark.png")} alt='' style={{ width: 338, height: 240, marginTop: 10, }} contentFit="contain" />
                            : <Image source={require("../../../../assets/graphics/people/selfie.png")} alt='' style={{ width: 338, height: 240, marginTop: 10, }} contentFit="contain" />}

                        {showTransactionFormModal && (
                            <TransactionFormModal 
                                visible={showTransactionFormModal} 
                                onClose={toggleTransactionFormModal} 
                                onAddBudget={handleAddBudget}
                                onPostSave={postSaveHandler}
                            />
                        )}
                    </>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#fff',
    },
    title: {
        fontSize: 18,
        maxWidth: 355,
        fontWeight: 'bold',
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
    modalHeader: {
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