import Segmented from "../../atoms/Segmented";
import PageIndicator from "../../molecules/PageIndicator";
import CategoryCard from "../../molecules/Balance/CategoryCard";

import { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Balance() {
    const [position, setPosition] = useState(1)
    const [count, setCount] = useState(3)
    const [topic, setTopic] = useState('accounts')
    const [num, setNum] = useState(0)
    const [accNum, setAccNum] = useState(0)
    const [incNum, setIncNum] = useState(0)
    const [expNum, setExpNum] = useState(0)

    return (
        <View style={styles.container}>
            <Segmented arr={[
                {
                    title: 'Accounts', onPress: () => {
                        setPosition(1)
                        setTopic('accounts')
                        setNum(0)
                        // console.log('test1')
                    }, number: { num }
                },
                {
                    title: 'Income', onPress: () => {
                        setPosition(2)
                        setTopic('income')
                        setNum(1)
                        // console.log('test2')
                    }, number: { num }
                },
                {
                    title: 'Expenses', onPress: () => {
                        setPosition(3)
                        setTopic('expenses')
                        setNum(2)
                        // console.log('test3')
                    }, number: { num }
                },
            ]} />
            {
                topic === 'accounts' ?
                    <View>
                        <CategoryCard arr={
                            [{ text: 'Chequing', amount: '3650', type: 'icon', icon: 'td', onPress: () => setAccNum(0), number:{accNum} },
                            { text: 'Saving', amount: '600', type: 'icon', icon: 'rbc', onPress: () => setAccNum(1), number:{accNum}  },
                            { text: 'GIC', amount: '250', type: 'icon', icon: 'cibc', onPress: () => setAccNum(2), number:{accNum}  },
                            { text: 'Cash', amount: '250', type: 'icon', icon: 'cash', onPress: () => setAccNum(3), number:{accNum}  },
                            ]
                        } />
                    </View> :
                    topic === 'income' ?
                        <View>
                            <CategoryCard arr={
                                [{ text: 'Full Time', amount: '3650', type: 'icon', icon: 'fullTime', onPress: () => setIncNum(0), number:{incNum}  },
                                { text: 'Part Time', amount: '600', type: 'icon', icon: 'partTime', onPress: () => setIncNum(1), number:{incNum}  },
                                { text: 'Investment', amount: '250', type: 'icon', icon: 'investment', onPress: () => setIncNum(2), number:{incNum}  }
                                ]
                            } />
                        </View> :
                        topic === 'expenses' ?
                            <View>
                                <CategoryCard arr={
                                    [{ text: 'Food', amount: '300', type: 'category', onPress: () => setExpNum(0), number:{expNum}  },
                                    { text: 'Groceries', amount: '70', type: 'category', onPress: () => setExpNum(1), number:{expNum}   },
                                    { text: 'Coffee', amount: '1000', type: 'category', onPress: () => setExpNum(2), number:{expNum}   }
                                    ]
                                } />
                            </View>
                            : <></>
            }
            <PageIndicator count={count} position={position} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16
    }
})