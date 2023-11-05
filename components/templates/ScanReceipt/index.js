import { View, StyleSheet, Text, Pressable, Modal } from "react-native"
import Message from "../../atoms/Message"
import ButtonLong from "../../atoms/ButtonLong"
import { Image } from "expo-image"
import { useState } from "react"
import Icon from 'react-native-vector-icons/FontAwesome5'
import AddTransactionForm from "../AddTransactionForm"

export default function ScanReceipt() {
    const message = {
        takePhoto: {
            header: 'Take a photo',
            body: 'Include the store name, transaction date, item details, and prices in your photo.'
        },
        photoTaken: {
            header: 'Information Scanned!',
            body: 'Moneyment will pull the transaction information from the receipt.'
        }
    }

    const [showCamera, setShowCamera] = useState(false)
    const [photoTaken, setPhotoTaken] = useState(false)
    const [showForm, setShowForm] = useState(false)

    const handleCamera = () => {
        showCamera ? setShowCamera(false) : setShowCamera(true)
    }

    const handleForm = () => {
        showForm ? setShowForm(false) : setShowForm(true)
    }

    return (
        <>
            <View style={styles.container}>
                {
                    photoTaken ? <Message header={message.photoTaken.header} bodyCopy={message.photoTaken.body} /> :
                        <Message header={message.takePhoto.header} bodyCopy={message.takePhoto.body} />}
                <View style={styles.container}>
                    <View style={styles.borderSheet}>

                        {
                            showCamera && photoTaken === false ?
                                <>
                                    <Text>Camera display here</Text>
                                </> :
                                showCamera && photoTaken ?
                                    <>
                                        <Text>Scanned OCR here</Text>
                                    </> :
                                    <>
                                        <Text style={[styles.text, styles.header]}>
                                            Example
                                        </Text>
                                        <Image source={require('../../../assets/graphics/receiptExample.png')} contentFit="contain" style={styles.image} />
                                        <Text style={styles.text}>
                                            Note: Sometimes the date is at the bottom of the receipt
                                        </Text>
                                    </>}
                    </View>

                    <Pressable onPress={handleCamera} style={styles.button}>
                        {
                            showCamera && photoTaken ?
                                <Text style={styles.buttonText} onPress={() => setShowForm(true)}>Next</Text> :
                                showCamera && photoTaken === false ?
                                    <Text style={styles.buttonText} onPress={() => setPhotoTaken(true)}>Take photo</Text> :
                                    <Text style={styles.buttonText}>Open Camera</Text>}
                    </Pressable>

                    <Modal animationType="slide" transparent={false} visible={showForm}>
                        <View style={styles.modalContainer}>
                            <View style={styles.modalHeader}>
                                <Pressable style={styles.closeButton} onPress={handleForm}>
                                    <Icon name='arrow-left' size={25} color='#000' />
                                </Pressable>
                                <Text style={styles.headerTitle}>Confirmation</Text>
                            </View>
                            <AddTransactionForm />
                        </View>
                    </Modal>

                </View>


            </View>
        </>
    )
}

const styles = StyleSheet.create({
    borderSheet: {
        borderWidth: 5,
        borderColor: '#429488',
        borderRadius: 15,
        width: 350,
        height: 563,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
        marginTop: 20,
        marginBottom: 13
    },
    image: {
        width: 211,
        height: 372
    },
    text: {
        color: '#34776B'
    },
    header: {
        fontSize: 16,
        fontWeight: 500
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        height: 43,
        width: 356,
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -1 },
        shadowOpacity: 0.25,
        shadowRadius: 6,
        backgroundColor: '#429488'
    },
    buttonText: {
        fontSize: 16,
        textAlign: 'center',
        color: '#ffffff',
    },
})