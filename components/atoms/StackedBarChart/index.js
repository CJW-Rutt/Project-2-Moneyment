import { StackedBarChart } from "react-native-chart-kit";
import { View, Text, Dimensions, StyleSheet } from "react-native";

const screenWidth = Dimensions.get("window").width;
export default function StackedChart({ totalBudget, totalSpent }) {

    const data = {
        labels: ["Coffee", "Entertainment", "Dineout"],
        data: [
            [500, 50.45,],
            [1500, 578,],
            [5000, 1570,]
        ],
        barColors: ["#E58331", "#429488", "#B04121",]

    };
    const chartConfig = {
        backgroundGradientFrom: "#fff",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#fff",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        barPercentage: 1.5,
        barRadius: 5,
        propsForLabels: { fill: "transparent", }


    }
    return (
        <View>
            <StackedBarChart
                data={data}
                width={350}
                height={220}
                chartConfig={chartConfig} />

            <View style={styles.legend}>
                <View style={styles.budgetColor} />
                <Text style={styles.text}>Budget</Text>
                <View style={styles.spentColor} />
                <Text style={styles.text}>Spent</Text>
                <View style={styles.overspentColor} />
                <Text style={styles.text}>Overspent</Text>
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
        margin: 10
    }

})