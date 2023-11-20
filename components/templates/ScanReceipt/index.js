import { View, StyleSheet, Text, Pressable, Modal } from "react-native"
import { Image } from "expo-image"
import { useState, useEffect } from "react"

import Message from "../../atoms/Message"
import Icon from 'react-native-vector-icons/FontAwesome5'
import GalleryButton from "../../atoms/GalleryButton"
import { processOCR } from "../../../api/apiOCR"
import GptReview from "../GptReview"

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
    const [imageUri, setImageUri] = useState(null);
    const [ocrData, setOcrData] = useState(null);
    const [error, setError] = useState(null);

    const [reviewResults, setReviewResults] = useState({
        totalAmount: '',
        purchaseType: '',
        purchasePlace: ''
    });

    const handleOCRProcessing = async (uri) => {

        try {
            const ocrParsedResult = await processOCR(uri);

            if (ocrParsedResult.IsErroredOnProcessing) {
                setError(ocrParsedResult.ErrorMessage);
            } else {
                const parsedResults = ocrParsedResult["ParsedResults"];
                let pageText = '';

                if (parsedResults && Array.isArray(parsedResults)) {
                    parsedResults.forEach((value) => {
                    const exitCode = value["FileParseExitCode"];
                    const parsedText = value["ParsedText"];
                    const errorMessage = value["ParsedTextFileName"];

                    switch (+exitCode) {
                        case 1:
                            pageText = parsedText;
                        break;
                        default:
                            pageText += "Error: " + errorMessage;
                        break;
                    }
                    });
                } else {
                    pageText = "No parsed results available";
                }
                setOcrData(pageText);
                console.log('ocr:' + ocrData)
                setShowForm(true);

            }
        } catch (error) {
            setError('OCR processing failed: ' + error.message);
        }
    };

    const handleCamera = () => {
        showCamera ? setShowCamera(false) : setShowCamera(true)
    }

    const handleForm = () => {
        showForm ? setShowForm(false) : setShowForm(true)
    }

    return (
        <>
            <View style={styles.container}>
            <View style={styles.headermessageContainer}>
                {
                    photoTaken ? <Message header={message.photoTaken.header} bodyCopy={message.photoTaken.body} /> :
                        <Message header={message.takePhoto.header} bodyCopy={message.takePhoto.body} />
                }
                </View>
                <View style={styles.photocontainer}>
                    <View style={imageUri ? styles.borderSheetWithImage : styles.borderSheet}>
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
                                        {
                                            imageUri ? <></> : 
                                                <Text style={[styles.text, styles.header]}>
                                                    Example
                                                </Text>
                                        }
                                        {
                                            imageUri ?
                                                <Image
                                                    source={{ uri: imageUri }}
                                                    style={{ width: 360, height: 520, marginBottom: 10 }}
                                                /> :
                                                    <Image source={require('../../../assets/graphics/receiptExample.png')} style={styles.image} />
                                        }

                                        {
                                            imageUri ? <></> : 
                                                <Text style={[styles.text, styles.header]}>
                                                    Note: Sometimes the date is at the bottom of the receipt.
                                                </Text>
                                        }
                                    </>
                                    
                        }
                    </View>

                    {/* <Pressable style={styles.button}>
                        {
                            showCamera && photoTaken ?
                                <Text style={styles.buttonText} onPress={() => setShowForm(true)}>
                                    Next
                                </Text> :
                                showCamera && photoTaken === false ?
                                    <Text style={styles.buttonText} onPress={() => setPhotoTaken(true)}>Take photo</Text> :
                                    <GalleryButton onImageSelect={setImageUri} />
                        }
                    </Pressable> */}

                    <Pressable style={styles.button}>
                        {
                            imageUri ?
                                <Text style={styles.buttonText} onPress={() => handleOCRProcessing(imageUri)}>Next</Text> :
                                <GalleryButton onImageSelect={setImageUri} />
                        }
                    </Pressable>

                    <Modal animationType="slide" transparent={false} visible={showForm}>
                        <View style={styles.modalContainer}>
                            <View style={styles.modalHeader}>
                                <Pressable style={styles.closeButton} onPress={() => setShowForm(false)}>
                                    <Icon name='arrow-left' size={25} color='#000' />
                                </Pressable>
                                <Text style={styles.headerTitle}>
                                    Confirmation
                                </Text>
                            </View>
                            {ocrData && <GptReview data={ocrData} />}
                        </View>
                    </Modal>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    photocontainer: {
alignItems: "center"
    },
    borderSheet: {
        borderWidth: 5,
        borderColor: '#429488',
        borderRadius: 15,
        width: 350,
        minHeight: 520,
        maxHeight: 520,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
        marginTop: 20,
        marginBottom: 13,
        overflow: 'hidden',
        paddingTop: 10,
        paddingBottom: 10,
        padding: 5,
    },
    borderSheetWithImage: {
        borderWidth: 5,
        borderColor: '#429488',
        borderRadius: 15,
        width: 360,
        height: 520,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
        marginTop: 20,
        marginBottom: 13,
        overflow: 'hidden',
    },
    image: {
        width: 211,
        height: 372
    },
    text: {
        color: '#34776B'
    },
    header: {
        fontSize: 18,
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
    modalContainer: {
        flex: 1,
    },
    modalHeader: {
        flex: 1,
        flexDirection: 'row',
        maxHeight: 100,
        minHeight: 100,
        width: '100%',
        borderBottomWidth: 1,
        borderColor: 'lightgray',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingBottom: 15,
    },
    closeButton: {
        paddingLeft: 80
    },
    headerTitle: {
        fontSize: 18,
        textAlign: 'left',
        fontWeight: 'bold',
        width: '100%',
        paddingLeft: 80
    },
    headermessageContainer: {
    paddingTop: 15,
    }
})