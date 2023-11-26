import { View, TextInput, StyleSheet, Text } from "react-native"
import { useState } from "react"
import TransactionType from "../../atoms/TransactionType"
import SaveButton from "../../atoms/SaveButton"
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { DarkModeContext } from '../../../context/darkMode';
import { useContext } from 'react'

export default function AddTransactionForm({ initialValues = {}, onClose }) {

    const { isDarkMode } = useContext(DarkModeContext);

    const [store, setStore] = useState(initialValues.purchasePlace || '');
    const [price, setPrice] = useState(initialValues.totalAmount || '');
    const [transactionType, setTransactionType] = useState('');
    const [budget, setBudget] = useState(initialValues.purchaseType || '');

    const handleTransactionTypeSelect = (selectedType) => {
        setTransactionType(selectedType);
    };

    const handleSave = async () => {
        const db = getFirestore();

        const newTransaction = {
            store: store,
            date: date, // We need to update this 
            price: parseFloat(price),
            budget: budget,
            type: transactionType,
        };

        try {
            const docRef = await addDoc(collection(db, "transactions"), newTransaction);
            onClose();

            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };

    const [date, setDate] = useState(formatDate(new Date()));

    return (
        <>
            <View style={isDarkMode ? styles.maincontainerDark : styles.maincontainer}>
                <View style={styles.container}>
                    <Text style={isDarkMode ? styles.reviewTextDark : styles.reviewText}>Review your Transaction</Text>
                    <Text style={isDarkMode ? styles.subTextDark : styles.subText}>* required fields</Text>
                    <View>
                        <View style={styles.smallContainer}>
                            <Text style={isDarkMode ? styles.textDark : ""}>Store *</Text>
                            <TextInput
                                style={isDarkMode ? styles.inputDark : styles.input}
                                value={store}
                                onChangeText={text => setStore(text)}
                                placeholder="Enter Store Name..."
                                placeholderTextColor={isDarkMode ? "#CFCFCF" : "#000"}
                            />
                        </View>
                        <View style={styles.rowContainer}>
                            <View style={styles.smallRowContainer}>
                                <Text style={isDarkMode ? styles.textDark : ""}>
                                    Date *
                                </Text>
                                <TextInput
                                    style={isDarkMode ? styles.inputShortDark : styles.inputShort}
                                    value={date}
                                    onChangeText={text => setDate(text)}
                                    placeholder="Select date"
                                    placeholderTextColor={isDarkMode ? "#CFCFCF" : "#000"}
                                />
                            </View>
                            <View style={styles.smallRowContainer}>
                                <Text style={isDarkMode ? styles.textDark : ""}>
                                    Price *
                                </Text>
                                <TextInput
                                    style={isDarkMode ? styles.inputShortDark : styles.inputShort}
                                    value={price}
                                    onChangeText={price => setPrice(price)}
                                    placeholder="$5.00"
                                    keyboardType="numeric"
                                    placeholderTextColor={isDarkMode ? "#CFCFCF" : "#000"}
                                />
                            </View>
                        </View>
                        <View style={styles.smallContainer}>
                            <Text style={isDarkMode ? styles.textDark : ""}>
                                Transaction Type
                            </Text>
                            <TransactionType onTypeSelect={handleTransactionTypeSelect} />
                        </View>

                        <View style={styles.smallContainer}>
                            <Text style={isDarkMode ? styles.textDark : ""}>
                                Budget Name *
                            </Text>
                            <TextInput
                                style={isDarkMode ? styles.inputDark : styles.input}
                                value={budget}
                                onChangeText={text => setBudget(text)}
                                placeholder="Budget Name"
                                placeholderTextColor={isDarkMode ? "#CFCFCF" : "#000"}
                            />
                        </View>
                    </View>
                </View>
                <View>
                    <SaveButton onSave={handleSave} />
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        gap: 10
    },
    maincontainerDark: {
        flex: 1,
        gap: 10,
        backgroundColor: "#212121"
    },
    container: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20
    },
    smallContainer: {
        gap: 3,
        marginBottom: 10,
    },
    rowContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        gap: 10,
        marginBottom: 10,
    },
    smallRowContainer: {
        width: '48%',
        flexGrow: 1,
        gap: 3,
    },
    input: {
        height: 35,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#707070',
        padding: 10,
        fontSize: 12,
        fontWeight: "400"
    },
    inputShort: {
        height: 35,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#707070',
        padding: 10,
        fontSize: 12,
        fontWeight: "400"
    },
    inputDark: {
        height: 35,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#707070',
        padding: 10,
        fontSize: 12,
        fontWeight: "400",
        color: "#CFCFCF"
    },
    inputShortDark: {
        height: 35,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#707070',
        padding: 10,
        fontSize: 12,
        fontWeight: "400",
        color: "#CFCFCF"
    },
    reviewText: {
        fontSize: 16,
        fontWeight: "700",
        // paddingTop: 20,
        paddingBottom: 5
    },
    reviewTextDark: {
        fontSize: 16,
        fontWeight: "700",
        // paddingTop: 20,
        paddingBottom: 5,
        color: "#CFCFCf"
    },
    subText: {
        fontSize: 12,
        fontWeight: "400",
        paddingBottom: 15,
    },
    subTextDark: {
        fontSize: 12,
        fontWeight: "400",
        paddingBottom: 15,
        color: "#CFCFCF"
    },
    textDark: {
        color: "#CFCFCF"
    }
})