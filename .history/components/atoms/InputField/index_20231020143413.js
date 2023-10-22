import { View, TextInput, Text, StyleSheet } from 'react-native';
import { useState } from 'react';

const InputField = () => {
    const [text, onChangeText] = useState('');


    return (
        <View>
            <Text>Budget Name</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
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
});

export default InputField;