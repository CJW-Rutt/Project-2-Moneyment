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
    const [priceError, setPriceError] = useState('');
    const [budgetError, setBudgetError] = useState('');

    const currentTimestamp = new Date().getTime();

    const handleTransactionTypeSelect = (selectedType) => {
        setTransactionType(selectedType);
    };

    const validateForm = () => {
        let isValid = true;

        if (!price || isNaN(price)) {
            setPriceError("Please enter a valid price.");
            isValid = false;
        } else {
            setPriceError("");
        }

        if (!budget) {
            setBudgetError("Budget name is required.");
            isValid = false;
        } else {
            setBudgetError("");
        }

        return isValid;
    };

    const handleSave = async () => {
        if (!validateForm()) return;
        const db = getFirestore();

        const newTransaction = {
            store: store,
            date: date,
            price: parseFloat(price),
            budget: budget,
            type: transactionType,
            time: currentTimestamp
        };

        try {
            const docRef = await addDoc(collection(db, "transactions"), newTransaction);
            onClose();;
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
                                {
                                    priceError ?
                                        <Text style={styles.errorText}>{priceError}</Text> :
                                        <Text style={isDarkMode ? styles.textDark : ""}>Price *</Text>
                                }
                                <TextInput
                                    style={priceError ? styles.inputError : (isDarkMode ? styles.inputDark : styles.input)}
                                    value={price}
                                    onChangeText={price => setPrice(price)}
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
                            {
                                    budgetError ?
                                        <Text style={styles.errorText}>{budgetError}</Text> :
                                        <Text style={isDarkMode ? styles.textDark : ""}>Budget Name *</Text>
                            }
                            <TextInput
                                style={budgetError ? styles.inputError : (isDarkMode ? styles.inputDark : styles.input)}
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
        paddingBottom: 5
    },
    reviewTextDark: {
        fontSize: 16,
        fontWeight: "700",
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
    },
    inputError: {
        borderColor: 'red',
        borderWidth: 1,
        marginTop: 5,
    },
    errorText: {
        fontSize: 12,
        color: 'red',

    }
})