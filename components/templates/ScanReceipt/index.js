import { View, StyleSheet, Text, Pressable, Modal, ActivityIndicator } from "react-native"
import { Image } from "expo-image"
import { useState, useEffect } from "react"

import Message from "../../atoms/Message"

import GalleryButton from "../../atoms/GalleryButton"
import { processOCR } from "../../../api/apiOCR"
import { gptTransactionReview } from "../../../api/gptTransactionReview"
import { retreiveOcrKey } from "../../../api/retreiveOcrKey"
import TransactionFormModal from "../../modal/Add/TransactionFormModal"

export default function ScanReceipt({ onCloseScan }) {
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

        useEffect(() => {
        // This is the effect function, it runs after the initial render.

        return () => {
            // This is the cleanup function, it runs when the component unmounts.
            console.log("ScanReceipt is unmounting");
            // Reset states or perform other cleanup tasks here.
            // For example:
            setShowCamera(false);
            setPhotoTaken(false);
            setShowForm(false);
            // ... any other state resets or cleanup you need
        };
    }, []);

    const gptQuestion = 'Review and analyze the receipt data and align the return with your role.';
    const gptRole = 'You are provided with receipt data. Analyze it and extract and return Total Price:, Type:, and Place:. Type is the type of item strictly done with two words or less. Place is the type of store strictly done with two words or less. So if Vape Batteries are bought, Vape Store is the place. The response for each category CANNOT be more then 2 words. Just choose.';

    const [showCamera, setShowCamera] = useState(false)
    const [photoTaken, setPhotoTaken] = useState(false)
    const [showForm, setShowForm] = useState(false)
    const [imageUri, setImageUri] = useState(null);
    const [ocrData, setOcrData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const [reviewResults, setReviewResults] = useState({
        totalAmount: '',
        purchaseType: '',
        purchasePlace: ''
    });

    const handleOCRProcessing = async (uri) => {

        setIsLoading(true);

        try {
            const ocrParsedResult = await processOCR(uri);
            const retrieveKey = await retreiveOcrKey();
    
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
    
                if (pageText) {
                    try {
                        const gptResponse = await gptTransactionReview(gptQuestion, pageText, gptRole);
                        if (gptResponse) {
                            setReviewResults({
                                totalAmount: gptResponse.totalAmount,
                                purchaseType: gptResponse.purchaseType,
                                purchasePlace: gptResponse.purchasePlace,
                            });
                            setIsLoading(false);
                            setShowForm(true);
                        } else {
                            console.log('No gptResponse');
                        }

                    } catch (error) {
                        setError('Error processing Lambda response: ' + error.message);
                    }
                } else {
                    console.log('Issue with pageText. gptNot receiving response.')
                }
            }
        } catch (error) {
            setError('OCR processing failed: ' + error.message);
        }
    };

    // const handleCamera = () => {
    //     showCamera ? setShowCamera(false) : setShowCamera(true)
    // }

    // const handleForm = () => {
    //     showForm ? setShowForm(false) : setShowForm(true)
    // }

    return (
        <>
            <View style={styles.container}>
            <View style={styles.headermessageContainer}>
                {
                    photoTaken ? <Message header={message.photoTaken.header} bodyCopy={message.photoTaken.body} /> :
                        <Message header={message.takePhoto.header} bodyCopy={message.takePhoto.body} />
                }
                </View>
                {isLoading ? (
                    <ActivityIndicator size="small" color="#0000ff" />
                ) : (
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

                        <TransactionFormModal 
                            visible={showForm}
                            onClose={onCloseScan}
                            initialValues={reviewResults}
                        />
                    </View>
                )}
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