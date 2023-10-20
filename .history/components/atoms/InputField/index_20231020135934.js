import { View, TextInput, StyleSheet } from 'react-native';

const InputField = () => {
    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState('');