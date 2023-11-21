import React, { useEffect } from 'react'
import { View } from 'react-native'
import { StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from "react-native";
import { Text } from 'react-native-paper';
import { useContext } from 'react';
import { DarkModeContext } from '../../../context/darkMode';

const screenWidth = Dimensions.get("window").width;

export default function BezLineChart() {
    const { isDarkMode } = useContext(DarkModeContext);

    const data = {
        labels: ["Sep 4", "Sep 25", "Oct 2", "Oct 16"],
        datasets: [
            {
                data: [150, 330, 405, 749],
                color: (opacity = 1) => `rgba(66,148,136, ${opacity})`, // optional
                strokeWidth: 2 // optional
            }
        ],
    };

    const chartConfigLight = {
        backgroundGradientFrom: "#fff",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#fff",
        backgroundGradientToOpacity: 0,
        color: (opacity = 1) => `rgba(66,148,136, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional,
    };

    const chartConfigDark = {
        backgroundGradientFrom: "#000",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#000",
        backgroundGradientToOpacity: 0,
        color: (opacity = 1) => `rgba(66,148,136, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(265, 265, 265, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional,
    };

    return (
        <>
            <Text style={styles.viewText}>Total Expenses</Text>
            <Text style={styles.balance}>$749</Text>
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
    }
})