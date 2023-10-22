import { View, Text, StyleSheet } from "react-native"
import { BarChart, XAxis, YAxis } from 'react-native-svg-charts'

import IconContainer from "../IconContainer"

export default function BarGraph() {
    const yAxis = [0, 10, 20, 30, 40, 50]
    const data = [20, 35, 29, 13, 21, 45, 33]
    const daysOfWeek = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun']

    const verticalContentInset = { top: 10, bottom: 10 }
    const xAxisHeight = 30

    return (
        <View>
            <View style={styles.textContainer}>
                <View style={styles.leftChevron} >
                    <IconContainer icon='chevronUp' size={17} colour='black' />
                </View>
                <Text style={{ fontSize: 14 }}>Week of Sept 4</Text>
                <View style={styles.rightChevron} >
                    <IconContainer icon='chevronUp' size={17} colour='black' />
                </View>
            </View>
            <View style={{ height: 231, width: 336, padding: 20, flexDirection: 'row' }}>
                <YAxis
                    data={yAxis}
                    numberOfTicks={6}
                    contentInset={verticalContentInset}
                    style={{ marginBottom: xAxisHeight }}
                />
                <View style={{ flex: 1 }}>
                    <BarChart
                        style={{ flex: 1 }}
                        data={data}
                        gridMin={0}
                        svg={{ fill: '#52A49A', width: 20, borderRadius: 5 }}
                        spacing={0.8}
                    />
                    <XAxis
                        style={{ marginTop: 10, height: xAxisHeight }}
                        data={data}
                        formatLabel={(value, index) => daysOfWeek[index]}
                        labelStyle={{ color: 'black' }}
                        contentInset={{ left: 17, right: 17, }}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20
    },
    leftChevron: {
        transform: [{ rotate: '270deg' }]
    },
    rightChevron: {
        transform: [{ rotate: '90deg' }]
    }
})