import { View, StyleSheet } from "react-native"
import { Image } from "expo-image"
import { Iconify } from 'react-native-iconify';

import food from "../../../assets/icons/fruits/Food.png"

export default function IconContainer({ icon, size, colour }) {
    return (
        <>
            <View style={styles.container} >
                {icon === 'settings' ? <Iconify icon='uil:setting' size={size} color={colour} />
                    : icon === 'calendar' ? <Iconify icon='uil:schedule' size={size} color={colour} />
                        : icon === 'food' ? <Image source={food} alt='' style={styles.xs} contentFit="contain" />
                            : <></>}
            </View>
        </>
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