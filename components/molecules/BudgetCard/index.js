import React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image"
import HorizontalProgressBar from "../../atoms/HorizontalProgressBar";



export default function BudgetCard({ budget, onPress }) {
    const totalSpent = budget.totalBudget - budget.totalPrice;

    const spentText = totalSpent >= 0 ? "on budget" : "overspent";
    const spentTextStyle = totalSpent >= 0 ? styles.greenText : styles.redText;
    return (
        <Pressable onPress={onPress}>
            <View style={styles.container}>
                <View style={styles.top_content}>
                    <Image
                        source={require("../../../assets/graphics/category/Coffee.png")} // make this dynamic
                        alt=''
                        style={styles.img}
                        contentFit="contain"
                        width={40}
                        height={40}
                    />
                    <View>
                        <Text style={styles.budget_name}>{budget.budgetTitle}</Text>
                        <Text style={styles.budget_recurrence}>Weekly</Text>

                    </View>
                    <View style={styles.budget_status}>
                        <Text style={[styles.budget_recurrence, spentTextStyle]}>{spentText}</Text>
                    </View>
                </View>
                <View style={styles.bottom_content}>
                    <View style={styles.container_price_text}>
                        <Text style={styles.bottom_content_price}>${budget.totalBudget}</Text>
                        <Text style={styles.bottom_content_text}>Budget</Text>
                    </View>
                    <View
                        style={{
                            borderLeftColor: '#DDDDDD',
                            borderLeftWidth: 1,
                            height: 34,
                            marginRight: 20,
                        }}
                    />
                    <View>
                        <Text style={styles.bottom_content_price}>${budget.totalPrice}</Text>
                        <Text style={styles.bottom_content_text}>Spent</Text>
                    </View>

                    <View
                        style={{
                            borderLeftColor: '#DDDDDD',
                            borderLeftWidth: 1,
                            height: 34,
                            marginLeft: 20,
                            marginRight: 40
                        }}
                    /><View>
                        <View>
                            <Text style={styles.bottom_content_price}>${totalSpent}</Text>
                            <Text style={styles.bottom_content_text}>Left</Text>

                        </View>
                    </View>
                </View>

                <HorizontalProgressBar progress={budget.progress} />
            </View>
        </Pressable>
    );
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
        marginRight: 50
    },
    budget_status: {
        marginLeft: 150,

    },
    greenText: {
        color: '#1E4C40',
        fontWeight: '600',
        fontSize: 12,
        backgroundColor: '#E3F1F1',
        padding: 5,
        borderRadius: 5,
    },
    redText: {
        color: '#B04121',
        fontWeight: '600',
        fontSize: 12,
        backgroundColor: '#F8E9E6',
        padding: 5,
        borderRadius: 5,
    }
});

