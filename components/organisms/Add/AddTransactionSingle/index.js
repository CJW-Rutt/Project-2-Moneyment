import { StyleSheet, Text, View, Button } from 'react-native';
import { Image } from "expo-image"

import LongTextButton from '../../../atoms/LongTextButton';

export default function AddTransactionSingle() {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>What works better for you!</Text>
            <Text style={styles.desc}>Choose the method tailored to your unique needs</Text>
            <View style={styles.buttonContainer}>
                <LongTextButton type="scan" />
                <LongTextButton type="manual" />
                <LongTextButton type="statements" />
            </View>
            <Image source={require("../../../../assets/graphics/people/zombie.png")} alt='' style={{width: 338, height: 240, marginTop: 10,}} contentFit="contain" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff'
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