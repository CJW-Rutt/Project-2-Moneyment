import { View, Text, StyleSheet, Pressable } from 'react-native'
import { Image } from "expo-image"
import { Iconify } from 'react-native-iconify';


export default function NavButton({ icon, active }) {
    const iconSources = {
        wallet: <Iconify icon='ph:wallet-bold' width={20} height={17.04} color='#707070' />,
        budget: <Iconify icon='fa-solid:piggy-bank' width={22.67} height={20} color='#707070' />,
        add: <Image source={require("../../../assets/add-logo.png")} alt='' style={styles.image} contentFit="contain" />,
    }

    const textLabels = {
        wallet: 'Wallet',
        budget: 'Budget',
        add: 'Add',
    };


    return (
        <Pressable onPress={onPress}>
            <View style={styles.container} >
                <View style={[styles.iconContainer, active && styles.activeIconContainer]}>
                    {iconSources[icon] || <></>}
                </View>
                <View style={styles.textContainer}>
                    {

                        textLabels[icon] && <Text style={{ fontFamily: 'Montserrat', fontSize: 12, fontWeight: '600', }}>{textLabels[icon]}</Text>
                    
                    }
                </View>
            </View>
        </ Pressable>

    )
}

const styles = StyleSheet.create({
    container: {
        height: 75,
        width: 75,
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconContainer: {
        flex: 0,
    },
    textContainer: {
        maxHeight: 15,
        marginTop: 13,
    },
    activeIconContainer: {
        backgroundColor: 'Black',
        borderRadius: 8,
    },
});