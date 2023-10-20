import { View, TextInput, StyleSheet } from 'react-native';

const InputField = () => {
    const [text, onChangeText] = useState('Useless Text');
    const [number, onChangeNumber] = useState('');