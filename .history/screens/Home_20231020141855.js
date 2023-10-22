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
            <NavButton icon='wallet' active />
            import {View, Text, StyleSheet, Pressable} from 'react-native'
// import {Image} from "expo-image"
// import {Iconify} from 'react-native-iconify';


// export default function NavButton({icon, active}) {
//     const iconSources = {
//         wallet: <Iconify icon='ph:wallet-bold' width={20} height={17.04} color='#707070' />,
//         budget: <Iconify icon='fa-solid:piggy-bank' width={22.67} height={20} color='#707070' />,
//         add: <Image source={require("../../../assets/add-logo.png")} alt='' style={styles.image} contentFit="contain" />,
//     }

//     const textLabels = {
//         wallet: 'Wallet',
//         budget: 'Budget',
//         add: 'Add',
//     };


//     return (
//         <Pressable onPress={onPress}>
//             <View style={styles.container} >
//                 <View style={[styles.iconContainer, active && styles.activeIconContainer]}>
//                     {iconSources[icon] || <></>}
//                 </View>
//                 <View style={styles.textContainer}>
//                     {

//                         textLabels[icon] && <Text style={{ fontFamily: 'Montserrat', fontSize: 12, fontWeight: '600', }}>{textLabels[icon]}</Text>

//                     }
//                 </View>
//             </View>
//         </ Pressable>

//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         height: 75,
//         width: 75,
//         flex: 0,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     iconContainer: {
//         flex: 0,
//     },
//     textContainer: {
//         maxHeight: 15,
//         marginTop: 13,
//     },
//     activeIconContainer: {
//         backgroundColor: 'Black',
//         borderRadius: 8,
//     },
// });
        </View>
    );
}

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

