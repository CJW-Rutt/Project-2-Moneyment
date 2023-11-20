
import { useState, useEffect } from 'react';
import { Statusbar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch, Appearance } from 'react-native';
export default function ToggleSwitch() {
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    useEffect(() => {
        const colorScheme = appearance.getColorScheme();
        if (colorScheme === 'dark') {
            setIsEnabled(true); // true means dark
        } else {
            setIsEnabled(false); // false means light
        }
    }, [])


    return (
        <View style={styles.container}>
            <Statusbar style="auto" />
            <Switch
                style={{ marginbottom: 500, marginleft: 150 }}
                trackColor={{ false: "light", true: "dark" }}
                thumbColor={isEnabled ? colorScheme == 'light' : colorScheme == 'dark'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>)
};

