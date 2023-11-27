import { View, StyleSheet } from "react-native";
import { DarkModeContext } from '../../../../context/darkMode';
import { useContext } from "react";

import BudgetSingle from "../../../organisms/Budget/BudgetSingle";
import Message from "../../../atoms/Message";

export default function BudgetSingleTemplate({ budget }) {
    const { isDarkMode } = useContext(DarkModeContext);

    return (
        <View style={isDarkMode ? styles.containerDark : styles.container}>
            <View style={{ marginTop: 20, marginBottom: 40 }}>
                <Message
                    header='Keep up the good work!'
                    bodyCopy="You've been keeping within your budget"
                />
            </View>
            <BudgetSingle budget={budget} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'flex-start',
    },
    containerDark: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'flex-start',
        backgroundColor: "#212121"
    }
})