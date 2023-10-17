import { View, StyleSheet } from "react-native"
import { Image } from "expo-image"
import { Iconify } from 'react-native-iconify';

export default function IconContainer({ icon, size, colour }) {
    const imageSources = {
        settings: <Iconify icon='uil:setting' size={size} color={colour} />,
        calendar: <Iconify icon='uil:schedule' size={size} color={colour} />,
        wallet: <Iconify icon='zondicons:wallet' size={size} color={colour} />,
        notification: <Iconify icon='mdi:bell-notification-outline' size={size} color={colour} />,
        forest: <Image source={require("../../../assets/icons/forest/black.png")} alt='' style={styles.l} contentFit="contain" />,
        robot: <Image source={require("../../../assets/icons/robot/black.png")} alt='' style={styles.l} contentFit="contain" />,

    };

    return (
        <View style={styles.container}>
            {imageSources[icon] || <></>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 45,
        height: 45
    },
    xs: { 
        width: 12,
        height: 12
    },
    s: {
        width: 16,
        height: 16
    },
    l: {
        width: 24,
        height: 24
    },
    xl: {
        width: 44,
        height: 44
    }
})