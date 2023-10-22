import { View, TextInput, StyleSheet } from 'react-native';
import { useState } from 'react';

const InputField = () => {
    const [text, onChangeText] = useState('');
    const [number, onChangeNumber] = useState('');

    return (
        <View>
            <TextInput>
                label= "hhh"
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
            </TextInput>
            <TextInput>

                style={styles.input}
                onChangeText={onChangeNumber}
                value=('$'{number})
                keyboardType="numeric"
            </TextInput>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default InputField;