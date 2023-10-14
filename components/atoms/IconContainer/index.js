import { View, StyleSheet } from "react-native"
import { Image } from "expo-image"
import { Iconify } from 'react-native-iconify';

export default function IconContainer({ icon, size, colour }) {
    const imageSources = {
        settings: <Iconify icon='uil:setting' size={size} color={colour} />,
        calendar: <Iconify icon='uil:schedule' size={size} color={colour} />,
        wallet: <Iconify icon='zondicons:wallet' size={size} color={colour} />,
        notification: <Iconify icon='mdi:bell-notification-outline' size={size} color={colour} />,
        food: <Image source={require("../../../assets/icons/fruits/Food.png")} alt='' style={styles.xs} contentFit="contain" />,
        forest: <Image source={require("../../../assets/icons/forest/black.png")} alt='' style={styles.xs} contentFit="contain" />,
        robot: <Image source={require("../../../assets/icons/robot/black.png")} alt='' style={styles.xs} contentFit="contain" />,

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
        width: 28,
        height: 28
    },
    xl: {
        width: 50,
        height: 50
    }
})