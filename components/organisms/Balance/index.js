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
                topic === 'accounts' ? <Text>Account info here</Text> :
                    topic === 'income' ? <Text>Income info here</Text> :
                        topic === 'expenses' ?
                            <View>
                                <CategoryCard text='Food' size='s' amount='200' />
                                <CategoryCard text='Groceries' size='s' amount='200' />
                                <CategoryCard text='Coffee' size='s' amount='20' />
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