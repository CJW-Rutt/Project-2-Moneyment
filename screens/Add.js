import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import HeadButtonDelete from '../components/HeadButtonDelete';
import HeadButtonEdit from '../components/atoms/HeadButtonEdit';

export default function Add({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Add Your Things Please!</Text>
            <StatusBar style="auto" />
            <HeadButtonDelete />
            <HeadButtonEdit />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
