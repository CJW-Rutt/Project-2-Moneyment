import { Image } from "expo-image"
import { View, StyleSheet, ScrollView, TouchableOpacity, Text } from "react-native"
import CategoryContainer from "../../../atoms/CategoryContainer"
import IconContainer from "../../../atoms/IconContainer"

import { useEffect, useState } from "react"

export default function CategoryCard({ arr = [{
    text: 'food', amount: '20'
}, {
    text: 'groceries', amount: '200'
}]
}) {

    const handlePress = (index, func) => {
        func()
    }

    return (
        <View>
            {
                arr.map((item, index) => {
                    category = item.text.toLowerCase()
                    return (
                        <TouchableOpacity onPress={() => handlePress(index, item.onPress)} key={index}>
                            <View style={styles.container}>
                                <View style={styles.cardContainer}>
                                    {item.number.accNum === index || item.number.incNum === index|| item.number.expNum === index ? <View style={[styles.active, styles.selected]}></View> : <View style={[styles.selected]}></View>}
                                    <View style={styles.iconContainer}>
                                        {item.type === 'category' ? <CategoryContainer category={category} size='s' /> :
                                            item.type === 'icon' ? <IconContainer icon={item.icon} size={16} colour='black' /> : <></>}
                                        <Text style={styles.category}>{item.text}</Text>
                                    </View>
                                    <Text style={styles.amount}>${item.amount}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                    )
                })
            }
        </View>

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
        maxWidth: 390 - 253,
        alignItems: 'center'
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