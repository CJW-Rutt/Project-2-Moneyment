import InputField from "../../atoms/InputField";
import BudgetDropdown from "../../atoms/BudgetDropdown";
import ToggleSwitch from "../../atoms/Switch";
import React, { useState } from 'react';
import { Text, StyleSheet, View, ScrollView, TextInput } from "react-native";
import SaveButton from "../../atoms/SaveButton";

export default function BudgetForm({ onAddBudget, closeModal }) {

    const [budgetTitle, setBudgetTitle] = useState('');
    const [budgetCategory, setBudgetCategory] = useState('');
    const [totalBudget, setTotalBudget] = useState('');

    const handleSave = () => {
        const newBudget = {
            budgetTitle,
            budgetCategory,
            totalPrice: 0,
            totalBudget: parseFloat(totalBudget) || 0,
        };
        onAddBudget(newBudget);
		closeModal();
    };

    return (
        <View style={styles.mainContainer}>
            <View style={styles.inputContainer}>
                <Text style={styles.title}>General Information</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder="Budget Title"
                    value={budgetTitle}
                    onChangeText={setBudgetTitle}
                />
                <TextInput 
                    style={styles.input} 
                    placeholder="Total Budget"
                    value={totalBudget}
                    keyboardType="numeric"
                    onChangeText={setTotalBudget}
                />
            </View>
            <View style={styles.dropdownContainer}>
                <View style={styles.row}>
                    <Text style={styles.title}>Recurrence</Text>
                </View>
                <BudgetDropdown/>
            </View>
            <SaveButton onSave={handleSave} />
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    row: {
        flexDirection: "row",
        paddingRight: 10,
        alignItems: "center",
    },
    inputContainer: {
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        borderColor: "#A9A9A9"
    },
    title: {
        paddingLeft: 14,
        paddingTop: 10,
        fontSize: 18,
        fontWeight: "600",
        paddingBottom: 10,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
