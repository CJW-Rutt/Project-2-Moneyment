import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Image } from "expo-image"

import LongTextButton from '../components/atoms/LongTextButton';


export default function Add({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Integrations</Text>
            <Text style={styles.desc}>Explore a seamless options to input your information into the app, tailored just the way you need it!</Text>
            <LongTextButton type="transactions" />
            <LongTextButton type="accounts" />
            <Image source={require("../assets/graphics/people/selfie.png")} alt='' style={{width: 358, height: 260, marginTop: 10,}} contentFit="contain" />
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
    title: {
        fontSize: 18,
        maxWidth: 355,
        fontWeight: 'bold',
        alignItems: 'flex-start',
        width: '100%',
        marginTop: 10,
    },
    desc: {
        fontSize: 12,
        marginTop: 10,
        maxWidth: 355,
        width: '100%',
    }
});
