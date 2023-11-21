import Segmented from "../../../atoms/Segmented";
import BudgetCard from "../../../molecules/BudgetCard";
import BarGraph from "../../../atoms/BarGraph";
import ManageBudgetCard from "../../../molecules/ManageBudgetCard";

import { useState, useEffect } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";

export default function BudgetSingleSegment({ budget }) {
    const [position, setPosition] = useState(1)
    const [count, setCount] = useState(3)
    const [topic, setTopic] = useState('overview')
    const [num, setNum] = useState(0)
    const [data, setData] = useState([1200, 6100, 15000, 20532])

    const [accNum, setAccNum] = useState('')
    const [accData, setAccData] = useState('')

    const [incNum, setIncNum] = useState('')
    const [incData, setIncData] = useState('')

    const [expNum, setExpNum] = useState('')
    const [expData, setExpData] = useState('')

    const [view, setView] = useState('Balance')

    const windowWidth = Dimensions.get('window').width;
    const defaultAccountData = [1200, 6100, 15000, 20532]
    const defaultIncomeData = [2730, 3250, 3895, 4500]
    const defaultExpenseData = [4500, 3980, 3540, 3590]

    const handleAccData = (data) => {
        setData(data)
        setAccData(data)
    }

    const handleIncData = (data) => {
        setData(data)
        setIncData(data)
    }

    const handleExpData = (data) => {
        setData(data)
        setExpData(data)
    }

    const dataObject = {
        accounts: [[7449, 8868, 7654, 9880], [3010, 2678, 2980, 3456], [6550, 6789, 7890, 8005], [1700, 1750, 1800, 2000]],
        income: [[3300, 3600, 3456, 3650], [300, 600, 456, 600], [200, 200, 200, 200]],
        expenses: [[330, 600, 456, 560], [400, 640, 566, 330], [210, 150, 175, 200], [160, 150, 220, 110]],
    }

    useEffect(() => {
        accNum !== '' ? handleAccData(dataObject.accounts[accNum]) : setData(defaultAccountData);
    }, [accNum])

    useEffect(() => {
        incNum !== '' ? handleIncData(dataObject.income[incNum]) : setData(defaultIncomeData);
    }, [incNum])

    useEffect(() => {
        expNum !== '' ? handleExpData(dataObject.expenses[expNum]) : setData(defaultExpenseData)
    }, [expNum])

    return (
        <View>
            <View style={[styles.container, styles.sheet, { width: windowWidth }]}>
                <Segmented arr={[
                    {
                        title: 'Overview', onPress: () => {
                            setPosition(0)
                            setTopic('overview')
                            setNum(0)
                            { accData === '' ? setData(defaultAccountData) : setData(accData) }
                            setView('Overview')
                        }, number: 0
                    },
                    {
                        title: 'Details', onPress: () => {
                            setPosition(1)
                            setTopic('details')
                            setNum(1)
                            { incData === '' ? setData(defaultIncomeData) : setData(incData) }
                            setView('Details')
                        }, number: 1
                    },
                ]} />
                {
                    topic === 'overview' ?
                        <View style={styles.budgetContainer}>
                            <BudgetCard budget={budget} />
                        </View> :
                        topic === 'details' ?
                            <View style={styles.barGraphContainer}>
                                <BarGraph />
                            </View> : <></>
                }
                {/* <PageIndicator count={count} position={position} /> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: 10
    },
    sheet: {
        backgroundColor: 'white',
        flex: 0,
    },
    track: {
        fontSize: 16,
        fontWeight: '700'
    },
    gainInsight: {
        fontSize: 12,
        color: '#707070'
    },
    barGraphContainer: {
        maxHeight: 200,
    },
    budgetContainer: {
        height: 200,
    },
    transactionsTitle: {
        marginTop: 50,
        fontSize: 18,


    }
})