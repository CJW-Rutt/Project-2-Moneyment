import { Text, StyleSheet, View } from 'react-native';
import { Image } from 'expo-image';
import { Button } from "react-native-paper";

export default function Welcome() {

    const getStarted = async () => {
        // Do something
    }

    return (
        <View style={styles.container}>
            <Image source={require('../assets/welcome.svg')} style={{ width: 390, height: 420 }} />
            <Text style={styles.heading}>Welcome!</Text>
            <Text style={styles.subheading}>We are here to help you take control of your spending and manage your finances.</Text>
            <Button
                mode='contained'
                style={styles.button}
                labelStyle={styles.buttonText}
                onPress={() => {
                    getStarted()
                }}
            >
                Get Started
            </Button>
            <Image style={styles.logo} source={require('../assets/refined-version.svg')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: '20%'
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center',
        padding: 10,
        marginTop: 30
    },
    subheading: {
        fontSize: 14,
        alignSelf: 'center',
        textAlign: 'center',
        color: "#898989",
        paddingLeft: 40,
        paddingRight: 40
    },
    logo: {
        width: 70,
        height: 10,
        alignSelf: 'center'
    },
    button: {
        backgroundColor: '#429488',
        borderRadius: 10,
        height: 49,
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 40,
        width: 350
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: 'bold'
    }
});
