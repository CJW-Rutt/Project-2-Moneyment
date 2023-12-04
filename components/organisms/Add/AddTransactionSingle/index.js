import { StyleSheet, View, Button, Modal, Pressable } from 'react-native';
import { useState, useContext, useEffect } from 'react';
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

    useEffect(() => {
        console.log(`Transaction Form Modal is now ${showTransactionFormModal ? 'open' : 'closed'}.`);
        if (showTransactionFormModal) {
            console.log("Modal opened. Trace this back to find where it's set.");
        }
    }, [showTransactionFormModal]);

    const toggleTransactionFormModal = () => {
        console.log("AddTransactionSingle: toggleTransactionFormModal");
        setShowTransactionFormModal(!showTransactionFormModal);
    };

    const handleScan = () => {
        console.log('AddTransactionSingle: handleScan');
        showScan ? setShowScan(false) : setShowScan(true)
    }

    const handleAddBudget = (newBudget) => {
        console.log("New budget added:", newBudget);
    };

    return (
        <View style={styles.container}>
            {
                showScan ?
                    <>
                        <View style={isDarkMode ? styles.modalHeaderDark : styles.modalHeader}>
                            <Pressable style={styles.closeButton} onPress={handleScan}>
                                {
                                    isDarkMode ? <Icon name='arrow-left' size={20} color='#CFCFCF' />
                                        : <Icon name='arrow-left' size={20} color='#000' />
                                }
                            </Pressable>
                            <Text style={styles.headerTitle}>Scan Receipt</Text>
                        </View>
                        <Modal animationType="slide" transparent={false} visible={showScan}>
                            <View style={isDarkMode ? styles.modalHeaderDark : styles.modalHeader}>
                                <Pressable style={styles.closeButton} onPress={handleScan}>
                                    {
                                        isDarkMode ? <Icon name='arrow-left' size={20} color='#CFCFCF' />
                                            : <Icon name='arrow-left' size={20} color='#000' />
                                    }
                                </Pressable>
                                <Text style={styles.headerTitle}>Scan Receipt</Text>
                            </View>
                            <ScanReceipt onCloseScan={handleScan} />
                        </Modal>
                    </> :
                    <>
                        {/* {console.log('add transaction', isDarkMode)} */}
                        <View style={styles.textContainer}>
                            <Text style={styles.title}>What works better for you!</Text>
                            <Text style={isDarkMode ? styles.descDark : styles.desc}>Choose the method tailored to your unique needs</Text>
                        </View>
                        <View style={styles.buttonContainer}>
                            <LongTextButton type="scan" onPress={() => setShowScan(true)} />
                            <LongTextButton type="manual" onPress={toggleTransactionFormModal} />
                        </View>
                        {isDarkMode === true ? <Image source={require("../../../../assets/graphics/people/phone_using.svg")} alt='' style={{ width: 338, height: 250, marginTop: 30, }} contentFit="contain" />
                            : <Image source={require("../../../../assets/graphics/people/phone_using.svg")} alt='' style={{ width: 338, height: 250, marginTop: 30, }} contentFit="contain" />}

                        {showTransactionFormModal && (
                            <TransactionFormModal
                                visible={showTransactionFormModal}
                                onClose={toggleTransactionFormModal}
                                onAddBudget={handleAddBudget}
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
        justifyContent: 'flex-start',
        padding: 20,
    },
    textContainer: {
        width: '100%',
        display: "flex",
        flexDirection: "column",
        gap: 3,
    },
    title: {
        fontSize: 21,
        maxWidth: 355,
        fontWeight: 'bold',
        width: '100%',
        // marginTop: 10,
    },
    desc: {
        fontSize: 14,
        color: "#707070"
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'space-between',
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