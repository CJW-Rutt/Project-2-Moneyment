import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Appearance, useColorScheme } from 'react-native';
import NavButton from '../components/atoms/NavButton';
import BudgetSingleTemplate from '../components/templates/Budget/BudgetSingleTemplate';
import { useState } from 'react';

export default function Budget({navigation}) {
    const colorScheme = useColorScheme();

    const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;

    const themeContainerStyle =
        colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

    const [visible, setVisible] = useState(false)

    return (
        <View style={[styles.container, themeContainerStyle]} >
            {/* <Text style={[styles.text, themeTextStyle]} >Budget TIME!!</Text> */}
            {/* <NavButton icon="budget" active  /> */}
            <BudgetSingleTemplate />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '1vh',
    },
});
