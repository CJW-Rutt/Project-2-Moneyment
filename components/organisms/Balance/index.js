import Segmented from "../../atoms/Segmented";
import CategoryCard from "../../molecules/Balance/CategoryCard";
import BezLineChart from "../../atoms/BezLineChart";

import { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions } from "react-native";

export default function Balance() {
    const [position, setPosition] = useState(1)
    const [topic, setTopic] = useState('accounts')
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
            <View style={styles.headerChartContainer}>
                <View style={styles.container}>
                    <BezLineChart num={data} view={view} />
                </View>
            </View>
            <View style={[styles.container, styles.sheet, { width: windowWidth }]}>
                <Segmented arr={[
                    {
                        title: 'Accounts', onPress: () => {
                            setPosition(1)
                            setTopic('accounts')
                            setNum(0)
                            { accData === '' ? setData(defaultAccountData) : setData(accData) }
                            setView('Balance')
                        }, number: { num }
                    },
                    {
                        title: 'Income', onPress: () => {
                            setPosition(2)
                            setTopic('income')
                            setNum(1)
                            { incData === '' ? setData(defaultIncomeData) : setData(incData) }
                            setView('Income')
                        }, number: { num }
                    },
                    {
                        title: 'Expenses', onPress: () => {
                            setPosition(3)
                            setTopic('expenses')
                            setNum(2)
                            { expData === '' ? setData(defaultExpenseData) : setData(expData) }
                            setView('Expenses')
                        }, number: { num }
                    },
                ]} />
                {
                    topic === 'accounts' ?
                        <View>
                            <CategoryCard arr={
                                [{
                                    text: 'Chequing', amount: '9880', type: 'icon', icon: 'td', onPress: () => {
                                        accNum !== 0 ? setAccNum(0) : setAccNum('');
                                    }, number: { accNum }
                                },
                                {
                                    text: 'Saving', amount: '3456', type: 'icon', icon: 'rbc', onPress: () => {
                                        accNum !== 1 ? setAccNum(1) : setAccNum('')
                                    }, number: { accNum }
                                },
                                {
                                    text: 'GIC', amount: '8005', type: 'icon', icon: 'cibc', onPress: () => {
                                        accNum !== 2 ? setAccNum(2) : setAccNum('')
                                    }, number: { accNum }
                                },
                                {
                                    text: 'Cash', amount: '2000', type: 'icon', icon: 'cash', onPress: () => {
                                        accNum !== 3 ? setAccNum(3) : setAccNum('')
                                    }, number: { accNum }
                                },
                                ]
                            } />
                        </View> :
                        topic === 'income' ?
                            <View>
                                <CategoryCard arr={
                                    [{
                                        text: 'Full Time', amount: '3650', type: 'icon', icon: 'fullTime', onPress: () => {
                                            incNum !== 0 ? setIncNum(0) : setIncNum('');
                                        }, number: { incNum }
                                    },
                                    {
                                        text: 'Part Time', amount: '600', type: 'icon', icon: 'partTime', onPress: () => {
                                            incNum !== 1 ? setIncNum(1) : setIncNum('');
                                        }, number: { incNum }
                                    },
                                    {
                                        text: 'Investment', amount: '250', type: 'icon', icon: 'investment', onPress: () => {
                                            incNum !== 2 ? setIncNum(2) : setIncNum('');
                                        }, number: { incNum }
                                    }
                                    ]
                                } />
                            </View> :
                            topic === 'expenses' ?
                                <View>
                                    <CategoryCard arr={
                                        [{
                                            text: 'Food', amount: '560', type: 'category', onPress: () => {
                                                expNum !== 0 ? setExpNum(0) : setExpNum('')
                                            }, number: { expNum }
                                        },
                                        {
                                            text: 'Groceries', amount: '330', type: 'category', onPress: () => {
                                                expNum !== 1 ? setExpNum(1) : setExpNum('')
                                            }, number: { expNum }
                                        },
                                        {
                                            text: 'Coffee', amount: '200', type: 'category', onPress: () => {
                                                expNum !== 2 ? setExpNum(2) : setExpNum('')
                                            }, number: { expNum }
                                        },
                                        {
                                            text: 'Shopping', amount: '110', type: 'category', onPress: () => {
                                                expNum !== 3 ? setExpNum(3) : setExpNum('')
                                            }, number: { expNum }
                                        }
                                        ]
                                    } />
                                </View>
                                : <></>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        gap: 16,
        paddingTop: 20
    },
    headerChartContainer: {
        gap: 10,
    },
    sheet: {
        backgroundColor: 'white',
        height: 389,
        minHeight: 389,
        maxHeight: 389,
        flex: 1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderColor: 'gray',
        borderWidth: 1
    },
    track: {
        fontSize: 16,
        fontWeight: '700'
    },
    gainInsight: {
        fontSize: 12,
        color: '#707070'
    }
})