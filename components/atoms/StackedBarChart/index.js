import { StackedBarChart } from "react-native-svg-charts";
import { View, Text, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
export default function StackedChart(onAddBudget, totalBudget, remainingBudget) {
    const data = {
        labels: ["Coffee", "Entertainment", "Dineout"],
        legend: ["Budget", "Spent", "Overspent"],
        data: [
            [500, 550, 50],
            [700, 600, 0],
            [300, 50, 0]
        ],
        barColors: ["#B04121", "#E58331", "#429488"]

    };
    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        barPercentage: 0.5,

    };
    return (<>

        <StackedBarChart
            data={data}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig} />
    </>)
}