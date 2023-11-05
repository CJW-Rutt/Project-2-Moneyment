import { StyleSheet, Text, View, Button, Modal, Pressable } from 'react-native';
import { useState } from 'react';
import { Image } from "expo-image"
import Icon from 'react-native-vector-icons/FontAwesome5'
import ScanReceipt from '../../../templates/ScanReceipt';

import LongTextButton from '../../../atoms/LongTextButton';

export default function AddTransactionSingle() {
    const [showScan, setShowScan] = useState(false)

    const handleScan = () => {
        showScan ? setShowScan(false) : setShowScan(true)
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>What works better for you!</Text>
            <Text style={styles.desc}>Choose the method tailored to your unique needs</Text>
            <View style={styles.buttonContainer}>
                <LongTextButton type="scan" onPress={() => setShowScan(true)} />
                <LongTextButton type="manual" />
                <LongTextButton type="statements" />
            </View>
            <Image source={require("../../../../assets/graphics/people/zombie.png")} alt='' style={{ width: 338, height: 240, marginTop: 10, }} contentFit="contain" />
            <Modal animationType="slide" transparent={false} visible={showScan}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalHeader}>
                        <Pressable style={styles.closeButton} onPress={handleScan}>
                            <Icon name='arrow-left' size={25} color='#000' />
                        </Pressable>
                        <Text style={styles.headerTitle}>Scan Receipt</Text>
                    </View>
                    <ScanReceipt />
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
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