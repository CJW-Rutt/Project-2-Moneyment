import React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image"
import HorizontalProgressBar from "../../atoms/HorizontalProgressBar";


export default function BudgetCard({ onPress }) {

    return (
        <Pressable onPress={onPress}>
            <View style={styles.container}>
                <View style={styles.top_content}>
                    <Image
                        source={require("../../../assets/graphics/category/Coffee.png")}
                        alt=''
                        style={styles.img}
                        contentFit="contain"
                        width={40}
                        height={40}
                    />
                    <View>
                        <Text style={styles.budget_name}>Coffee</Text>
                        <Text style={styles.budget_recurrence}>Weekly</Text>
                    </View>
                </View>
                <View
                    style={{
                        borderBottomColor: '#DDDDDD',
                        borderBottomWidth: 1,
                        marginBottom: 10,
                        marginLeft: 15,
                        marginRight: 15,
                    }}
                />
                <View style={styles.bottom_content}>
                    <View style={styles.container_price_text}>
                        <Text style={styles.bottom_content_price}>$500</Text>
                        <Text style={styles.bottom_content_text}>Total budget</Text>
                    </View>
                    <View
                        style={{
                            borderLeftColor: '#DDDDDD',
                            borderLeftWidth: 1,
                            height: 34,
                            marginRight: 15,
                        }}
                    />
                    <View>
                        <Text style={styles.bottom_content_price}>$550</Text>
                        <Text style={styles.bottom_content_text}>Total spent</Text>
                    </View>
                </View>
                <HorizontalProgressBar progress={100}/>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
       borderStyle: 'solid',
       borderWidth: 1,
       borderColor: '#DDDDDD',
       borderRadius: 5,
       marginTop: 10,
    },
    budget_name: {
        fontSize: 18,
        color: '#000'
    },
    budget_recurrence: {
        fontSize: 12,
        color: '#707070'
    },
    top_content: {
        display: 'flex',
        flexDirection: 'row',
        columnGap: 15,
        padding: 15,
    },
    bottom_content: {
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 15
    },
    bottom_content_price: {
        fontSize: 16,
    },
    bottom_content_text: {
        fontSize: 12,
        color: '#707070',
        marginBottom: 10,
    },
    container_price_text: {
        marginRight: 80
    }
})
