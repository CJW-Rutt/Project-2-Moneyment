import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, View, Button } from 'react-native';
import { Appearance, useColorScheme } from 'react-native';
import WalletTemplate from '../components/templates/WalletTemplate';
import BezLineChart from '../components/atoms/BezLineChart';
import TransactionsCardHome from '../components/molecules/TransactionsCardHome';

export default function Home() {
    const colorScheme = useColorScheme();

    const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
    const themeContainerStyle =
        colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

    return (

        <View style={[styles.container, themeContainerStyle]}>
            <StatusBar style="auto" />
            <Text style={styles.title}>Transactions</Text>
            <Text style={styles.desc}>Understand your finances with simple charts</Text>
            <View style={styles.content}>
                <BezLineChart />
            </View>

            <TransactionsCardHome style={styles.transaction} />
        </View>

    );
} //<NavButton icon='wallet' active />

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {

        height: 'auto'

    },
    transaction: {

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
    },
    lightContainer: {
        backgroundColor: '#ffffff',
    },
    darkContainer: {
        backgroundColor: '#242c40',
    },
    lightThemeText: {
        color: '#242c40',
    },
    darkThemeText: {
        color: '#d0d0c0',
    },
});

