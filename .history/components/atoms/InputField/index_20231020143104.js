import { View, TextInput, StyleSheet } from 'react-native';
import { useState } from 'react';

const InputField = () => {
    const [text, onChangeText] = useState('');


    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                label="Budget Name"
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
        borderRadius: 5px,
        border: 1

    },
});

export default InputField;