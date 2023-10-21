import { View, StyleSheet } from "react-native"
import { Image } from "expo-image"
import { Iconify } from 'react-native-iconify';

export default function IconContainer({ icon, size, colour }) {
    const imageSources = {
        settings: <Iconify icon='uil:setting' size={size} color={colour} />,
        calendar: <Iconify icon='uil:schedule' size={size} color={colour} />,
        wallet: <Iconify icon='zondicons:wallet' size={size} color={colour} />,
        chevronUp: <Iconify icon='icon-park:up' size={size} color={colour} />,
        chevronDown: <Iconify icon='icon-park:down' size={size} color={colour} />,
        notification: <Iconify icon='mdi:bell-notification-outline' size={size} color={colour} />,
        close: <Iconify icon='material-symbols:close' size={size} color={colour} />,
        check: <Iconify icon='tabler:check' size={size} color={colour} />,
        arrowUp: <Iconify icon='tabler:arrow-up' size={size} color={colour} />,
        add: <Iconify icon='material-symbols:add' size={size} color={colour} />,
        fullTime: <Iconify icon='maki:suitcase' size={size} color={colour} />,
        partTime: <Iconify icon='entypo:tools' size={size} color={colour} />,
        investment: <Iconify icon='teenyicons:adjust-vertical-alt-solid' size={size} color={colour} />,
        forest: <Image source={require("../../../assets/icons/forest/black.png")} alt='' style={styles.l} contentFit="contain" />,
        robot: <Image source={require("../../../assets/icons/robot/black.png")} alt='' style={styles.l} contentFit="contain" />,
        sortUp: <Image source={require("../../../assets/icons/sort/up.png")} alt='' style={styles.l} contentFit="contain" />,
        sortDown: <Image source={require("../../../assets/icons/sort/down.png")} alt='' style={styles.l} contentFit="contain" />,
        setGoalBlack: <Image source={require("../../../assets/icons/setGoal/black.png")} alt='' style={styles.l} contentFit="contain" />,
        setGoalGray: <Image source={require("../../../assets/icons/setGoal/gray.png")} alt='' style={styles.l} contentFit="contain" />,
        setGoalWhite: <Image source={require("../../../assets/icons/setGoal/white.png")} alt='' style={styles.l} contentFit="contain" />,
        setGoalButton: <Image source={require("../../../assets/icons/setGoal/SetButton.png")} alt='' style={styles.l} contentFit="contain" />,
        td: <Image source={require("../../../assets/icons/bank/td.png")} alt='' style={styles.xl} contentFit="contain" />,
        cibc: <Image source={require("../../../assets/icons/bank/cibc.png")} alt='' style={styles.xl} contentFit="contain" />,
        rbc: <Image source={require("../../../assets/icons/bank/rbc.png")} alt='' style={styles.xl} contentFit="contain" />,
        cash: <Image source={require("../../../assets/icons/bank/cash.png")} alt='' style={styles.xl} contentFit="contain" />,


    };

    return (
        <View style={styles.container}>
            {imageSources[icon] || <></>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // width: 45,
        // height: 45
    },
    xs: {
        width: 14,
        height: 14
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
        width: 45,
        height: 45
    }
})