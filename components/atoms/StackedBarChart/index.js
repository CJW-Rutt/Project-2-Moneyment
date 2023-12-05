import { StackedBarChart } from "react-native-chart-kit";
import { View, Dimensions, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { DarkModeContext } from '../../../context/darkMode';
import { useContext, useEffect, useState } from "react";

const screenWidth = Dimensions.get("window").width;

export default function StackedChart({ totalBudget, totalSpent, realData, labels, chart }) {
    const { isDarkMode } = useContext(DarkModeContext);

    useEffect(() => {
        console.log(labels)
    }, [])

    const data = {
        labels: labels,
        data: chart,
        barColors: ["#E58331", "#429488", "#B04121",]
    };

    // {"amount": 20, "budgetTitle": "Coffee", "id": "2vrRrik6swUAyoQi4DpA", "left": 15, "name": "Coffee", "totalBudget": 20, "totalPrice": 5}, {"amount": 50, "budgetTitle": "Mom's Birthday", "id": "fknpqaT4WpWvBsIyFqth", "left": 50, "name": "Mom's Birthday", "totalBudget": 50, "totalPrice": 0}, {"amount": 200, "budgetTitle": "Shopping", "id": "k53R9XTWhHd8qhfPA3mR", "left": 100, "name": "Shopping", 

    const chartConfigLight = {
        backgroundGradientFrom: "#fff",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#fff",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        barPercentage: 0.75,
        propsForLabels: { fill: "transparent", }
    }

    const chartConfigDark = {
        backgroundGradientFrom: "#000",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#000",
        backgroundGradientToOpacity: 0,
        color: (opacity = 1) => `rgba(207, 207, 207, ${opacity})`,
        barPercentage: 0.75,
        propsForLabels: { fill: "transparent", }
    }

    return (
        <View>
            <StackedBarChart
                data={data}
                width={350}
                height={180}
                chartConfig={isDarkMode ? chartConfigDark : chartConfigLight}
            />
            <View style={styles.legend}>
                <View style={styles.budgetColor} />
                <Text style={isDarkMode ? styles.textDark : styles.text}>Budget</Text>
                <View style={styles.spentColor} />
                <Text style={isDarkMode ? styles.textDark : styles.text}>Spent</Text>
                <View style={styles.overspentColor} />
                <Text style={isDarkMode ? styles.textDark : styles.text}>Overspent</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    legend: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    budgetColor: {
        backgroundColor: "#429488",
        width: 10,
        height: 10,
        borderRadius: 50,
    },
    spentColor: {
        backgroundColor: "#E58331",
        width: 10,
        height: 10,
        borderRadius: 50,

    },
    overspentColor: {
        backgroundColor: "#B04121",
        width: 10,
        height: 10,
        borderRadius: 50,

    },
    text: {
        margin: 10,
        marginLeft: 5,
        fontSize: 12
    },
    textDark: {
        margin: 10,
        marginLeft: 5,
        fontSize: 12,
        color: "#CFCFCF"
    }

})