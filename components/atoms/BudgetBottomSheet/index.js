import { View, StyleSheet } from "react-native";

export default function BudgetBottomSheet({ size, children }) {

    const sheetSize = size === "m" ? styles.m : styles.l;

    return(
        <View style={[sheetSize, styles.sheetContainer]} >
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    sheetContainer: {
        backgroundColor: '#ffffff',
        zIndex: 9999,
    },
    m: {
        height: 589,
        width: 390,
    },
    l: {
        height: 734,
        width: 390,
    },
  });