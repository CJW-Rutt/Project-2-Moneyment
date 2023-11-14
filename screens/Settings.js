import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'expo-image'
import ToggleSwitch from '../components/atoms/Switch';

export default function Settings() {
    return (
        <View>
            <Text>Display</Text>
            <Text style={styles.bold}>We are not financial advisors</Text>
            <Text style={styles.p1}>Moneyment provides AI-generated financial suggestions and should be used for informational purposes only. All financial decisions remain ultimately your responsibility.</Text>
            <Text style={styles.p2}>Seek professional advice for complex financial matters.</Text>
            <Image source={require('./assets/refined-version.png')} style={{ width: 200, height: 200 }} />
        </View>
    );
}
const styles = StyleSheet.create({})