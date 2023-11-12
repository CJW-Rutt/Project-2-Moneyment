import { View, TextInput, StyleSheet, Text } from "react-native"
import { useState } from "react"
import { Divider } from "react-native-paper"
import TransactionType from "../../atoms/TransactionType"

export default function AddTransactionForm() {
    const [store, setStore] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [transaction, setTransaction] = useState('')
    const [budget, setBudget] = useState('')

    return (
        <>
        <View style={styles.maincontainer}>
            <View style={styles.container}>
            <Text style={styles.reviewText}>Review your Transaction</Text>
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
<TransactionType/>
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
            </View>

            <Divider />

            <View>
                <Text>
                    OCR info here
                </Text>
            </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    maincontainer: {
flex: 1,
    },
    container: {
        padding: 5,
    },
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
    reviewText: {
        fontSize: 18,
        fontWeight: "700",
        paddingTop: 20,
        paddingBottom: 20,

    }
})