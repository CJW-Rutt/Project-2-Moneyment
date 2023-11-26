import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Dimensions, ScrollView } from 'react-native';
import BezLineChart from '../components/atoms/BezLineChart';
import TransactionsCardHome from '../components/molecules/TransactionsCardHome';
import { Text } from 'react-native-paper';
import { DarkModeContext } from '../context/darkMode';
import { useContext } from 'react'

import {
    MD3LightTheme as DefaultTheme,
    PaperProvider,
} from 'react-native-paper';
import TopHeader from '../components/molecules/TopHeader';

export default function Home() {

    const windowWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;

    const { isDarkMode } = useContext(DarkModeContext);

    return (
        <View style={[styles.container, { height: screenHeight - 105 }]}>
            <TopHeader title="Transactions" />
            {/* <StatusBar style="auto" /> */}
            <ScrollView >
                <View style={[styles.subContainer]}>
                    <View style={styles.topContainer}>
                        <View style={styles.textContainer}>
                            <Text style={styles.title}>Track Your Transactions!</Text>
                            <Text style={isDarkMode ? styles.descDark : styles.desc}>Understand your finances with simple charts</Text>
                        </View>
                        <View style={styles.content}>
                            <BezLineChart />
                        </View>
                        <View style={{
                            borderBottomColor: '#F4F4F4',
                            borderBottomWidth: 1,
                            marginTop: 5,
                            marginBottom: 5,
                            width: 350
                        }}></View>
                    </View>
                    <TransactionsCardHome style={styles.transaction} />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    subContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
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
        fontSize: 21,
        fontWeight: 'bold',
    },
    desc: {
        fontSize: 14,
        color: "#707070"
    },
    descDark: {
        fontSize: 14,
        color: "#CFCFCF"
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

