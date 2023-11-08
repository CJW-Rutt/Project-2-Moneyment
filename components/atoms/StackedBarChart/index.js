import { StackedBarChart } from "react-native-chart-kit";
import { View, Text, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
export default function StackedChart({ totalBudget, totalSpent }) {

    const data = {
        labels: ["Coffee", "Entertainment", "Dineout"],
        legend: ["Budget", "Spent", "Overspent"],
        data: [

        ],
        barColors: ["#B04121", "#E58331", "#429488"]

    };
    const chartConfig = {
        backgroundGradientFrom: "#fff",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#fff",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        barPercentage: 0.5,
        barRadius: 5


    }
    return (
        <View>
            <StackedBarChart
                data={data}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig} />
        </View>
    )
}