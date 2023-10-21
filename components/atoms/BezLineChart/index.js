import React, { useEffect } from 'react'
import { Grid, LineChart, XAxis, YAxis, AreaChart } from 'react-native-svg-charts'
import { View } from 'react-native'
import {
    Circle,
    Defs,
    G,
    Line,
    Path,
} from 'react-native-svg';
import { Text, StyleSheet } from 'react-native';


export default function BezLineChart({
    num = [1200, 6100, 15000, 20532], view = 'Balance'
}) {

    const axesSvg = { fontSize: 12, fill: 'black' };
    const verticalContentInset = { top: 10, bottom: 10 }
    const xAxisHeight = 30

    const keys = ['Sept 4', 'Sept 25', 'Oct 2', 'Oct 16']
    const data = num
    const latestData = data.length - 1
    const currentBalance = data[latestData]

    useEffect(() => {
        console.log(latestData)
        console.log(currentBalance)
    }, [])


    const CustomLine = ({ line }) => (
        <Path
            key="line"
            d={line}
            stroke="#6AB4AC"
            strokeWidth={3}
            fill="none"
        />
    );

    return (
        <View>
            <Text style={styles.viewText}>{view}</Text>
            <Text style={styles.balance}>${currentBalance.toLocaleString()}</Text>

            <View style={{ height: 200, width: 340, padding: 20, flexDirection: 'row' }}>
                <YAxis
                    data={data}
                    style={{ marginBottom: xAxisHeight }}
                    contentInset={verticalContentInset}
                    svg={axesSvg}
                    numberOfTicks={data.length}
                />
                <View style={{ flex: 1, marginLeft: 10 }}>
                    <AreaChart
                        animate={true}
                        animationDuration={350}
                        style={{ flex: 1 }}
                        data={data}
                        contentInset={verticalContentInset}
                        svg={{ fill: 'rgba(106,180,172, 0.4)' }}>
                        <CustomLine />
                        {/* <Grid/> */}
                    </AreaChart>
                    <XAxis
                        style={{ marginHorizontal: -10, height: xAxisHeight }}
                        data={data}
                        formatLabel={(value, index) => keys[value]}
                        contentInset={{ left: 17, right: 17, }}
                        svg={axesSvg}
                    />
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    balance: {
        fontSize: 36,
        fontWeight: '600'
    },
    viewText: {
        fontSize: 14,
        color: '#707070'
    }
})