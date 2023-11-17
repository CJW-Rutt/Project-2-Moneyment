import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, View, Button } from 'react-native';
import { Appearance, useColorScheme } from 'react-native';
import WalletTemplate from '../components/templates/WalletTemplate';
import BezLineChart from '../components/atoms/BezLineChart';
import TransactionsCardHome from '../components/molecules/TransactionsCardHome';
import { Text } from 'react-native-paper';
import {
    MD3LightTheme as DefaultTheme,
    PaperProvider,
} from 'react-native-paper';
import TopHeader from '../components/molecules/TopHeader';

export default function Home() {
    return (

        <View style={[styles.container,]}>
            <TopHeader title="Transactions" />
            <StatusBar style="auto" />
            <Text style={styles.title}>Track Your Transactions!</Text>
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
        marginBottom: 30
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

