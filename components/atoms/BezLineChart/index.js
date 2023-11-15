import React, { useEffect } from 'react'
import { View } from 'react-native'
import { Text, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

export default function BezLineChart() {
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

    const chartConfig = {
        backgroundGradientFrom: "#fff",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#fff",
        backgroundGradientToOpacity: 0,
        color: (opacity = 1) => `rgba(66,148,136, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };

    return (
        <>
            <Text style={styles.viewText}>Total expenses</Text>
            <Text style={styles.balance}>$749</Text>
            <LineChart
                data={data}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
            />
        </>

    )



    // const axesSvg = { fontSize: 12, fill: 'black' };
    // const verticalContentInset = { top: 10, bottom: 0 }
    // const xAxisHeight = 10
    // const yAxisHeight = 10

    // const keys = ['Sept 4', 'Sept 25', 'Oct 2', 'Oct 16']
    // const data = num
    // const latestData = data.length - 1
    // const currentBalance = data[latestData]

    // useEffect(() => {
    //     console.log(latestData)
    //     console.log(currentBalance)
    // }, [])


    // const CustomLine = ({ line }) => (
    //     <Path
    //         key="line"
    //         d={line}
    //         stroke="#6AB4AC"
    //         strokeWidth={3}
    //         fill="none"
    //     />
    // );

    // return (
    //     <View>
    //         <Text style={styles.viewText}>{view}</Text>
    //         <Text style={styles.balance}>${currentBalance.toLocaleString()}</Text>

    //         <View style={{ height: 240, width: 400, padding: 30, flexDirection: 'row' }}>
    //             <YAxis
    //                 data={data}
    //                 style={{ marginBottom: yAxisHeight }}
    //                 contentInset={verticalContentInset}
    //                 svg={axesSvg}
    //                 numberOfTicks={data.length}

    //             />
    //             <View style={{ flex: 1, marginLeft: 10 }}>
    //                 <AreaChart
    //                     animate={true}
    //                     animationDuration={350}
    //                     style={{ flex: 1 }}
    //                     data={data}
    //                     contentInset={verticalContentInset}
    //                     svg={{ fill: 'rgba(66, 148, 136, 0.1)' }}>
    //                     <CustomLine />

    //                 </AreaChart>
    //                 <XAxis
    //                     style={{ marginHorizontal: -10, height: xAxisHeight }}
    //                     data={data}
    //                     formatLabel={(value, index) => keys[value]}
    //                     contentInset={{ left: 17, right: 17, }}
    //                     svg={axesSvg}
    //                 />
    //             </View>
    //         </View>
    //     </View>

    // )
}

const styles = StyleSheet.create({
    balance: {
        fontSize: 36,
        fontWeight: '600',
        marginLeft: 20

    },
    viewText: {
        fontSize: 14,
        color: '#707070',
        marginLeft: 20
    }
})