import { Image } from "expo-image"
import { View, StyleSheet, ScrollView, TouchableOpacity, Text } from "react-native"
import CategoryContainer from "../../../atoms/CategoryContainer"
import { useEffect, useState } from "react"

export default function CategoryCard({ text, size, amount }) {

    const [active, setActive] = useState(false)
    category = text.toLowerCase()

    const handlePress = () => {
        active ? setActive(false) : setActive(true)
        console.log(active)
    }

    return (
        <TouchableOpacity onPress={() => handlePress()}>
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    {active ? <View style={[styles.active, styles.selected]}></View> : <View style={[styles.selected]}></View>}
                    <View style={styles.iconContainer}>
                        <CategoryContainer category={category} size={size} />
                        <Text style={styles.category}>{text}</Text>
                    </View>
                    <Text style={styles.amount}>${amount}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flexDirection: 'row',
        width: 390,
        height: 45,
    },
    cardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between'
    },
    iconContainer: {
        flexDirection: 'row',
        paddingLeft: 22,
        maxWidth: 390 - 253
    },
    amount: {
        textAlign: 'right',
        paddingRight: 20
    },
    category: {
        textAlign: 'left'
    },
    active: {
        backgroundColor: 'black',
    },
    selected: {
        width: 7,
        height: '100%',
        position: 'absolute'
    }

})