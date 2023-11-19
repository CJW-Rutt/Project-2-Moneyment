import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, View, Button, Dimensions } from 'react-native';
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

    const windowWidth = Dimensions.get('window').width;

    return (

        <View style={[styles.container]}>
            <TopHeader title="Transactions" />
            <StatusBar style="auto" />
            <View style={styles.topContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Track Your Transactions!</Text>
                    <Text style={styles.desc}>Understand your finances with simple charts</Text>
                </View>
                <View style={styles.content}>
                    <BezLineChart />
                </View>
                <View style={{
                    borderBottomColor: '#F4F4F4',
                    borderBottomWidth: 1,
                    marginTop: 5,
                    marginBottom: 5,
                    width: { windowWidth }
                }}></View>
            </View>

            <TransactionsCardHome style={styles.transaction} />
        </View>

    );
} //<NavButton icon='wallet' active />

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    topContainer: {
        width: '100%',
        display: "flex",
        flexDirection: "column",
        padding: 20,
        paddingBottom: 10,
        gap: 15
    },
    textContainer: {
        gap: 3,
    },
    content: {
        height: 'auto',
    },
    transaction: {
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    desc: {
        fontSize: 12,
        color: "#707070"
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

