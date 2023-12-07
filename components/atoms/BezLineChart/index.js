import React from 'react'
import { StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from "react-native";
import { Text } from 'react-native-paper';
import { useContext } from 'react';
import { DarkModeContext } from '../../../context/darkMode';

const screenWidth = Dimensions.get("window").width;

export default function BezLineChart({ sum, chartData=[1, 2, 3], chartLabel }) {
    const { isDarkMode } = useContext(DarkModeContext);

    if (chartData.length === 0) {
        chartData = [0, 0, 0]
    }

    if (chartLabel.length === 0) {
        chartLabel = [" "]
    }

    const data = {
        datasets: [
            {
                data: chartData,
                color: (opacity = 1) => `rgba(66,148,136, ${opacity})`,
                strokeWidth: 2
            }
        ],
        labels: chartLabel
    };

    const chartConfigLight = {
        backgroundGradientFrom: "#fff",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#fff",
        backgroundGradientToOpacity: 0,
        color: (opacity = 1) => `rgba(66,148,136, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        strokeWidth: 2,
        barPercentage: 0.5,
        useShadowColorFromDataset: false
    };

    const chartConfigDark = {
        backgroundGradientFrom: "#000",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#000",
        backgroundGradientToOpacity: 0,
        color: (opacity = 1) => `rgba(66,148,136, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(207, 207, 207, ${opacity})`,
        strokeWidth: 2,
        barPercentage: 0.5,
        useShadowColorFromDataset: false
    };

    return (
        <>
            <Text style={isDarkMode ? styles.viewTextDark : styles.viewText}>Total Expenses</Text>
            <Text style={isDarkMode ? styles.balanceDark : styles.balance}>${sum.toFixed(2)}</Text>
            <LineChart
                data={data}
                width={screenWidth + 20}
                height={180}
                chartConfig={isDarkMode ? chartConfigDark : chartConfigLight}
                fromZero={true}
                withHorizontalLines={false}
                withVerticalLines={false}
                yLabelsOffset={25}
                bezier
            />
        </>

    )
}

const styles = StyleSheet.create({
    balance: {
        fontSize: 36,
        fontWeight: '800',
        marginBottom: 10
    },
    viewText: {
        fontSize: 14,
        color: '#707070',
    },
    balanceDark: {
        fontSize: 36,
        fontWeight: '800',
        marginBottom: 10,
        color: "#CFCFCF"
    },
    viewTextDark: {
        fontSize: 14,
        color: "#CFCFCF"
    }
})