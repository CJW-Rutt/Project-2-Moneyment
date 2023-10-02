import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Home({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Moneyment</Text>
            <StatusBar style="auto" />
            <Button 
                title="Go to about page"
                onPress={() => navigation.push('About')}
            />
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
