import { View, TextInput, Text, StyleSheet } from 'react-native';
import { useState } from 'react';

const InputField = () => {
    const [text, onChangeText] = useState('');
    const [number, onChangeNumber] = useState('');


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Budget Name</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
            />
            <Text style={styles.title}>Amount</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                keyboardType="numeric"
            />

        </View>
    );
};

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
    container: {


    },
    title: {
        marginLeft: 15,
        fontSize: 12,
        color: "#707070"

    }
});

export default InputField;