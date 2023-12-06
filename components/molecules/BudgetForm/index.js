import BudgetDropdown from "../../atoms/BudgetDropdown";
import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, View, TextInput } from "react-native";
import SaveButton from "../../atoms/SaveButton";
import { Image } from "expo-image";
import { DarkModeContext } from '../../../context/darkMode';
import { Text } from "react-native-paper";
import { useTheme, Switch } from "react-native-paper";
import { collection, getFirestore, addDoc, doc, updateDoc } from "firebase/firestore";
import Message from "../../atoms/Message";
import { Picker } from '@react-native-picker/picker';
import IconList from '../../../utils/icons/index.js';

export default function BudgetForm({ budgetData, closeModal, onClose }) {
    const currentTimestamp = new Date().getTime();

    const theme = useTheme()
    const { isDarkMode } = useContext(DarkModeContext);

    const [toggle, setToggle] = useState(false)

    const onToggle = () => setToggle(!toggle)
    
    const isEditMode = budgetData && budgetData.id;

    const [budgetTitle, setBudgetTitle] = useState(isEditMode ? budgetData.budgetTitle : '');
    const [totalBudget, setTotalBudget] = useState(isEditMode ? budgetData.totalBudget?.toString() : '');
    const [selectedIcon, setSelectedIcon] = useState(isEditMode ? budgetData.icon : '');

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

    useEffect(() => {
        if (isEditMode) {
            setBudgetTitle(budgetData.budgetTitle || '');
            setTotalBudget(budgetData.totalBudget?.toString() || '');
            setSelectedIcon(budgetData.icon || '');
        }
    }, []);

    const handleSave = async () => {
        const budgetDetails = {
            name: budgetTitle,
            amount: parseFloat(totalBudget) || 0,
            icon: selectedIcon,
            time: currentTimestamp
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
                <View style={styles.iconRow}>
                    <View style={styles.iconPicker}>
                        <Picker
                            selectedValue={selectedIcon}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedIcon(itemValue)
                            }>
                                {
                                    Object.keys(IconList).map((key) => (
                                        <Picker.Item key={key} label={key} value={key} />
                                    ))
                                }
                        </Picker>
                    </View>
                    {
                        selectedIcon && IconList[selectedIcon] && (
                            <Image
                                source={IconList[selectedIcon]}
                                style={{ width: 50, height: 50, alignSelf: 'center', marginLeft: 10, marginRight: 10 }}
                            />
                        )
                    }
                </View>
            </View>
            <View style={isDarkMode ? styles.dividerDark : styles.divider} />
            <View style={styles.dropdownContainer}>
                <View style={styles.row}>
                    <Text style={styles.heading}>Recurrence</Text>
                    <View style={styles.switchContainer}>
                        <Switch
                            value={toggle}
                            onValueChange={onToggle}
                            color='#429488'
                        />
                    </View>
                </View>
                <BudgetDropdown toggle={toggle} />
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
        fontSize: 12,
        color: "#707070"
    },
    titleDark: {
        fontSize: 12,
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
        paddingTop: 10,
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
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    switchContainer: {
        paddingTop: 10
    },
    iconRow: {
        flexDirection: 'row', 
        alignItems: 'center',
        paddingRight: 20,
        paddingLeft: 20,
        height: 35,
        marginTop: 50,
        marginBottom: 50,
    },
    iconPicker: {
        flex: 3,
        borderWidth: 1,
        borderColor: "#707070",
        justifyContent: 'center',
        borderRadius: 5,
        
        height: 35,
    }
});