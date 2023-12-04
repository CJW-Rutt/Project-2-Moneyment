import BudgetDropdown from "../../atoms/BudgetDropdown";
import React, { useState, useContext } from 'react';
import { StyleSheet, View, ScrollView, TextInput } from "react-native";
import SaveButton from "../../atoms/SaveButton";
import { Image } from "expo-image";
import { DarkModeContext } from '../../../context/darkMode';
import { Text } from "react-native-paper";
import { useTheme } from "react-native-paper";
import { collection, getFirestore, addDoc, doc, updateDoc } from "firebase/firestore";
import Message from "../../atoms/Message";

export default function BudgetForm({ budgetData, onSave, closeModal, onClose }) {
    console.log('BUDGET DATA: ', budgetData)

    const theme = useTheme()
    const { isDarkMode } = useContext(DarkModeContext);

    const [budgetTitle, setBudgetTitle] = useState(budgetData?.budgetTitle || '');
    const [budgetCategory, setBudgetCategory] = useState(budgetData?.budgetCategory || '');
    const [totalBudget, setTotalBudget] = useState(budgetData?.totalBudget?.toString() || '');

    const isEditMode = budgetData && budgetData.id;

    const addBudget = async (budgetDetails) => {
        const db = getFirestore();
        const budgetCollectionRef = collection(db, 'budgets');
        await addDoc(budgetCollectionRef, budgetDetails);
    };

    const updateBudget = async (id, budgetDetails) => {
        const db = getFirestore();
        const budgetDocRef = doc(db, 'budgets', id);
        await updateDoc(budgetDocRef, budgetDetails);
    };

    const handleSave = async () => {
        const budgetDetails = {
            name: budgetTitle,
            amount: parseFloat(totalBudget) || 0,
        };

        try {
            if (isEditMode) {
                await updateBudget(budgetData.id, budgetDetails);
            } else {
                await addBudget(budgetDetails);
            }
            closeModal();
        } catch (error) {
            console.error("Error saving budget:", error);
        }
    };

    return (
        <View style={isDarkMode ? styles.mainContainerDark : styles.mainContainer}>
            <View style={styles.inputContainer}>
                <Message
                    header='General Information'
                    bodyCopy="* required fields"
                />
                <View style={styles.subContainer}>
                    <Text style={isDarkMode ? styles.titleDark : styles.title}>Budget name *</Text>
                    <TextInput
                        style={isDarkMode ? [styles.inputDark, { borderColor: theme.colors.primaryLight }] : [styles.input, { borderColor: theme.colors.primaryLight }]}
                        placeholder="Budget name *"
                        placeholderTextColor={isDarkMode ? "#CFCFCF" : "#707070"}
                        value={budgetTitle}
                        onChangeText={setBudgetTitle}
                    />
                </View>
                <View style={styles.subContainer}>
                    <Text style={isDarkMode ? styles.titleDark : styles.title}>Amount *</Text>
                    <TextInput
                        style={isDarkMode ? [styles.inputDark, { borderColor: theme.colors.primaryLight }] : [styles.input, { borderColor: theme.colors.primaryLight }]}
                        placeholder="Total Budget"
                        placeholderTextColor={isDarkMode ? "#CFCFCF" : "#707070"}
                        value={totalBudget}
                        keyboardType="numeric"
                        onChangeText={setTotalBudget}
                    />
                </View>
            </View>
            <View style={isDarkMode ? styles.dividerDark : styles.divider} />
            <View style={styles.dropdownContainer}>
                <View style={styles.row}>
                    <Text style={styles.heading}>Recurrence</Text>
                </View>
                <BudgetDropdown />
            </View >
            <View style={styles.image}>
                {
                    isDarkMode
                        ? <Image source={require("../../../assets/graphics/people/chillingDark.png")} alt='' style={{ width: 300, height: 210 }} contentFit="contain" />
                        : <Image source={require("../../../assets/graphics/people/chilling.png")} alt='' style={{ width: 300, height: 210 }} contentFit="contain" />
                }
            </View>
            <SaveButton onSave={handleSave} onPress={onClose} />
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    mainContainerDark: {
        flex: 1,
        backgroundColor: "#212121"
    },
    subContainer: {
        paddingLeft: 20,
        paddingRight: 20,
        gap: 5
    },
    title: {
        font: 12,
        color: "#707070"
    },
    titleDark: {
        font: 12,
        color: "#CFCFCF"
    },
    inputContainer: {
        paddingTop: 20,
        gap: 20
    },
    input: {
        borderWidth: 1,
        borderColor: "#707070",
        borderRadius: 5,
        paddingLeft: 10,
        height: 35,
        fontWeight: 'bold'
    },
    inputDark: {
        borderWidth: 1,
        borderColor: "#707070",
        borderRadius: 5,
        paddingLeft: 10,
        height: 35,
        fontWeight: 'bold',
        color: "#CFCFCF"
    },
    divider: {
        width: 350,
        borderBottomColor: "#A9A9A9",
        borderBottomWidth: 1,
        marginLeft: 20,
        marginTop: 20
    },
    dividerDark: {
        width: 350,
        borderBottomColor: "#535353",
        borderBottomWidth: 1,
        marginLeft: 20,
        marginTop: 20
    },
    heading: {
        fontSize: 16,
        fontWeight: '800',
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20
    },
    image: {
        marginTop: 20,
        marginBottom: 20,
        flexDirection: "row",
        justifyContent: 'center'
    },
    row: {
        marginBottom: 5
    }
});