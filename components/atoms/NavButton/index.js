import { View } from 'react-native'
import { StyleSheet } from 'react-native'
import { Image } from "expo-image"
import { Iconify } from 'react-native-iconify'

export default function NavButton( icon, active ) {

    const iconSources = {
        wallet: <Iconify icon='ph:wallet-bold' color='#000000' /> ,
        budget: <Iconify icon='ph:wallet-bold'  color='#000000' /> ,
        add: <Image source={require("../../../assets/add-logo.png")} alt='' style={styles.image} contentFit="contain" />,
    }

    const textLabels = {
        wallet: 'Wallet',
        budget: 'Budget',
        add: 'Add',
    };


    return (
        <View style={styles.container}>
            <View style={[styles.iconContainer, active && styles.activeIconContainer]}>
                {iconSources[icon] || <></>}
            </View>
            <View style={styles.textContainer}>
                {/* 
                    icon === 'wallet' ? 'Wallet' : 
                    icon === 'budget' ? 'Budget' : 
                    icon === 'add' ? 'Add' : null 
                 */
                    textLabels[icon] && <Text>{textLabels[icon]}</Text>
                
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 75,
        width: 75,
        borderWidth: 1,
        borderColor: 'black', 
    },
    iconContainer: {
        height: 32,
        weight: 65,
    },
    activeIconContainer: {
        backgroundColor: 'Black',
        borderRadius: 8,
    },
});