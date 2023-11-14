import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'expo-image'
import ToggleSwitch from '../components/atoms/Switch';
import { Switch } from 'react-native-paper';
import { useState } from 'react';
import Segmented from '../components/atoms/Segmented';

export default function Settings() {
    const [toggle, setToggle] = useState(false)
    const onToggleSwitch = () => setToggle(!toggle)

    return (
        <View>
            <Text>Display</Text>
            {/* <Segmented /> */}
            {/* <Switch value={toggle} onValueChange={onToggleSwitch} /> */}
            <Text style={styles.bold}>We are not financial advisors</Text>
            <Text style={styles.p1}>Moneyment provides AI-generated financial suggestions and should be used for informational purposes only. All financial decisions remain ultimately your responsibility.</Text>
            <Text style={styles.p2}>Seek professional advice for complex financial matters.</Text>
            <Image source={require('../assets/refined-version.png')} style={{ width: 191, height: 29 }} />
        </View>
    );
}
const styles = StyleSheet.create({})