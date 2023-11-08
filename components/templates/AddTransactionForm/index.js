import { View, TextInput, StyleSheet, Text } from "react-native"
import { useState } from "react"
import { Divider } from "react-native-paper"

export default function AddTransactionForm() {
    const [store, setStore] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [transaction, setTransaction] = useState('')
    const [budget, setBudget] = useState('')

    return (
        <>
            <Text style={styles.reviewText}>Review your transaction</Text>
            <View>
                <View>
                    <Text>Store *</Text>
                    <TextInput
                        style={styles.input}
                        value={store}
                        onChangeText={text => setStore(text)}
                    />
                </View>
                <View>
                    <View>
                        <Text>
                            Date
                        </Text>
                        <TextInput
                            style={styles.input}
                            value={date}
                            onChangeText={text => setDate(text)}
                        />
                    </View>
                    <View>
                        <Text>
                            Time
                        </Text>
                        <TextInput
                            style={styles.input}
                            value={time}
                            onChangeText={text => setTime(text)}
                        />
                    </View>
                </View>
                <View>
                    <Text>
                        Transaction Type
                    </Text>

                </View>
                <View>
                    <Text>
                        Budget Name *
                    </Text>
                    <TextInput
                        style={styles.input}
                        value={budget}
                        onChangeText={text => setBudget(text)}
                    />
                </View>
            </View>

            <Divider />

            <View>
                <Text>
                    OCR info here
                </Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 35,
        width: 350,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        border: 1,
        borderColor: '#707070'

    },
})