import React from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image"
import { Text } from "react-native-paper";
import HorizontalProgressBar from "../../atoms/HorizontalProgressBar";



export default function BudgetCard({ budget, onPress }) {
    const totalSpent = budget.totalBudget - budget.totalPrice;

    const spentText = totalSpent >= 0 ? "on budget" : "overspent";
    const spentTextStyle = totalSpent >= 0 ? styles.greenText : styles.redText;
    return (
        <Pressable onPress={onPress}>
            <View style={styles.container}>
                <View style={styles.main_container}>
                    <View style={styles.top_content}>
                        <View style={styles.text_content}>
                            <Image
                                source={require("../../../assets/graphics/category/Coffee.png")} // make this dynamic
                                alt=''
                                style={styles.img}
                                contentFit="contain"
                                width={24}
                                height={24}
                            />
                            <View>
                                <Text style={styles.budget_name}>{budget.budgetTitle}</Text>
                                {/* <Text style={styles.budget_recurrence}>Weekly</Text> */}
                            </View>
                        </View>
                        <View style={styles.budget_status}>
                            <Text style={[styles.budget_recurrence, spentTextStyle]}>{spentText}</Text>
                        </View>
                    </View>
                    <View
                        style={{
                            borderTopColor: '#DDDDDD',
                            borderTopWidth: 1,
                            width: "100 %",
                            marginTop: 12,
                            marginBottom: 5
                        }}
                    />
                    <View style={styles.bottom_content}>
                        <View style={styles.container_price_text_one}>
                            <Text style={styles.bottom_content_price}>${budget.totalBudget}</Text>
                            <Text style={styles.bottom_content_text}>Budget</Text>
                        </View>
                        <View
                            style={{
                                borderLeftColor: '#DDDDDD',
                                borderLeftWidth: 1,
                                height: "100 %",
                                marginRight: 20
                            }}
                        />
                        <View style={styles.container_price_text_two}>
                            <Text style={styles.bottom_content_price}>${budget.totalPrice}</Text>
                            <Text style={styles.bottom_content_text}>Spent</Text>
                        </View>

                        <View
                            style={{
                                borderLeftColor: '#DDDDDD',
                                borderLeftWidth: 1,
                                height: "100 %",
                                marginRight: 20
                            }}
                        />
                        <View style={styles.container_price_text_two}>
                            <Text style={styles.bottom_content_price}>${totalSpent}</Text>
                            <Text style={styles.bottom_content_text}>Left</Text>

                        </View>
                    </View>
                </View>
                <HorizontalProgressBar progress={budget.progress} />
            </View>
        </Pressable >
    );
}

const styles = StyleSheet.create({
    container: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#DDDDDD',
        borderRadius: 5,
        marginTop: 10,
        height: 118,
        justifyContent: "space-between"
    },
    budget_name: {
        fontSize: 16,
        fontWeight: 'bold'
        // color: '#000'
    },
    budget_recurrence: {
        fontSize: 12,
        padding: 3,
        paddingLeft: 10,
        paddingRight: 10
        // color: '#707070'
    },
    main_container: {
        padding: 15,
        paddingBottom: 0
    },
    top_content: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 15,
        // backgroundColor: 'blue',
        justifyContent: 'space-between'
    },
    text_content: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
    },
    bottom_content: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 5,
        paddingBottom: 5,
        justifyContent: 'space-between'
    },
    bottom_content_price: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    bottom_content_text: {
        fontSize: 12,
        color: '#707070',
    },
    container_price_text_one: {
        width: "30%",
    },
    container_price_text_two: {
        flex: 1,
    },
    budget_status: {

    },
    greenText: {
        color: '#1E4C40',
        fontWeight: '600',
        fontSize: 12,
        backgroundColor: '#E3F1F1',
        borderRadius: 5,
    },
    redText: {
        color: '#B04121',
        fontWeight: '600',
        fontSize: 12,
        backgroundColor: '#F8E9E6',
        borderRadius: 5,
    }
});

