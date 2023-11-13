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
                    <Text style={styles.subText}>* required fields</Text>
                    <View>
                        <View style={styles.smallContainer}>
                            <Text>Store *</Text>
                            <TextInput
                                style={styles.input}
                                value={store}
                                onChangeText={text => setStore(text)}
                                placeholder="MUJI"
                            />
                        </View>
                        <View style={styles.rowContainer}>
                            <View style={styles.smallRowContainer}>
                                <Text>
                                    Date *
                                </Text>
                                <TextInput
                                    style={styles.inputShort}
                                    value={date}
                                    onChangeText={text => setDate(text)}
                                    placeholder="July 9, 2023"
                                />
                            </View>
                            <View style={styles.smallRowContainer}>
                                <Text>
                                    Time
                                </Text>
                                <TextInput
                                    style={styles.inputShort}
                                    value={time}
                                    onChangeText={text => setTime(text)}
                                    placeholder="1:26:06"
                                />
                            </View>
                        </View>
                        <View style={styles.smallContainer}>
                            <Text>
                                Transaction Type
                            </Text>
                            <TransactionType />
                        </View>

                        <View style={styles.smallContainer}>
                            <Text>
                                Budget Name *
                            </Text>
                            <TextInput
                                style={styles.input}
                                value={budget}
                                onChangeText={text => setBudget(text)}
                                placeholder="Shopping"
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
        paddingLeft: 30,
        paddingRight: 30,
        marginBottom: 30
    },
    smallContainer: {
        gap: 3,
        marginBottom: 10,
    },
    rowContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        gap: 10,
        marginBottom: 10,
    },
    smallRowContainer: {
        width: '48%',
        flexGrow: 1,
        gap: 3
    },
    input: {
        height: 35,
        borderWidth: 1,
        borderRadius: 5,
        border: 1,
        borderColor: '#707070',
        padding: 10,
        fontSize: 12,
        fontWeight: "400"
    },
    inputShort: {
        height: 35,
        borderWidth: 1,
        borderRadius: 5,
        border: 1,
        borderColor: '#707070',
        padding: 10,
        fontSize: 12,
        fontWeight: "400"
    },
    reviewText: {
        fontSize: 16,
        fontWeight: "700",
        paddingTop: 20,
        paddingBottom: 5
    },
    subText: {
        fontSize: 12,
        fontWeight: "400",
        paddingBottom: 15
    }
})