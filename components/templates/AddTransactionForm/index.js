import { View, TextInput, StyleSheet, Text } from "react-native"
import { useState } from "react"
import { Divider } from "react-native-paper"

export default function AddTransactionForm({ initialValues }) {
    console.log(initialValues);
    const [store, setStore] = useState(initialValues.purchasePlace || '');
    const [date, setDate] = useState('')
    const [price, setPrice] = useState(initialValues.totalAmount || '');
    const [transaction, setTransaction] = useState('')
    const [budget, setBudget] = useState(initialValues.purchaseType || '');

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
                            Amount
                        </Text>
                        <TextInput
                            style={styles.input}
                            value={price}
                            onChangeText={text => setPrice(text)}
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