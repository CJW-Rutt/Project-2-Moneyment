import { View, TextInput, StyleSheet } from 'react-native';

const InputField = () => {
    const [text, onChangeText] = useState('Useless Text');
    const [number, onChangeNumber] = useState('');

    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="useless placeholder"
                keyboardType="numeric"
            />
        </View>
    );
};
