import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Appearance, useColorScheme } from 'react-native';
import { useState } from 'react';
import userAvatar from '../assets/images/sampleAvatar.png'
import InputField from '../components/atoms/InputField';
import User from '../components/atoms/Avatar';
import IconContainer from '../components/atoms/IconContainer';
import GraphicContainer from '../components/atoms/GraphicContainer';
import HorizontalProgressBar from '../components/atoms/HorizontalProgressBar';
import BudgetBottomSheet from '../components/atoms/BudgetBottomSheet';
import NavButton from '../components/atoms/NavButton';

export default function Home({ navigation }) {
    const colorScheme = useColorScheme();

    const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
    const themeContainerStyle =
        colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

    return (
        <View style={[styles.container, themeContainerStyle]}>
            <Text style={[styles.text, themeTextStyle]}>Your current theme is: {colorScheme}</Text>
            <StatusBar style="auto" />
            {/* <User size='xs' url={userAvatar} /> */}
            <IconContainer icon='settings' size={24} colour='#900' />
            <IconContainer icon='calendar' size={24} colour='#0a3fff' />
            <IconContainer icon='forest' size='l' />

            <InputField />
        </View>
    );
} //<NavButton icon='wallet' active />

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    lightContainer: {
        backgroundColor: '#d0d0c0',
    },
    darkContainer: {
        backgroundColor: '#242c40',
    },
    lightThemeText: {
        color: '#242c40',
    },
    darkThemeText: {
        color: '#d0d0c0',
    },
});

