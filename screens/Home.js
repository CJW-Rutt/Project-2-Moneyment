import { StyleSheet, View, Dimensions, ScrollView } from 'react-native';
import BezLineChart from '../components/atoms/BezLineChart';
import TransactionsCardHome from '../components/molecules/TransactionsCardHome';
import { collection, query, onSnapshot, getFirestore } from "firebase/firestore";
import { Text } from 'react-native-paper';
import { DarkModeContext } from '../context/darkMode';
import { useContext, useEffect, useState } from 'react'
import TopHeader from '../components/molecules/TopHeader';

export default function Home() {

    const [transactions, setTransactions] = useState({});
    const [sum, setSum] = useState(0)
    const [chartData, setChartData] = useState([])
    const [chartLabel, setChartLabel] = useState([])

    let num = 0
    let chartStartNum = 0

    const chartDataArr = []
    const chartLabelArr = []

    useEffect(() => {
        const db = getFirestore();
        const q = query(collection(db, "transactions"));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const newTransactions = {};
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                const date = data.date;
                if (!newTransactions[date]) {
                    newTransactions[date] = [];
                }
                newTransactions[date].push({ id: doc.id, ...data });
            });
            setTransactions(newTransactions);
        });

        return () => unsubscribe();
    })

    const getMonth = (str) => {
        return str.slice(0, 3)
    }

    const getDay = (str) => {
        return str.split(" ")[1].split(",")[0]
    }

    const getDate = (str1, str2) => {
        return `${getMonth(str1)} ${getDay(str2)}`
    }

    useEffect(() => {
        Object.entries(transactions).map(i => {
            setSum(num += i[1][0].price)
            chartDataArr.push(chartStartNum += i[1][0].price)
            chartLabelArr.push(getDate(i[1][0].date, i[1][0].date))
        })
        setChartData(chartDataArr)
        setChartLabel(chartLabelArr)

        // console.log(chartData)
    }, [transactions])

    // useEffect(() => {
    //     Object.entries(transactions).map(i => {
    //         console.log(i[1][0])
    //     })
    // }, [])

    const windowWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;

    const { isDarkMode } = useContext(DarkModeContext);

    return (
        <View style={[styles.container, { height: screenHeight - 55, width: windowWidth }]}>
            <TopHeader title="Transactions" />
            <ScrollView showsVerticalScrollIndicator={false} directionalLockEnabled>
                <View style={[styles.subContainer]}>
                    <View style={styles.topContainer}>
                        <View style={styles.textContainer}>
                            <Text style={styles.title}>Track Your Transactions!</Text>
                            <Text style={isDarkMode ? styles.descDark : styles.desc}>Understand your finances with simple charts</Text>
                        </View>
                        <View style={styles.content}>
                            <BezLineChart sum={sum} chartData={chartData} chartLabel={chartLabel} />
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
        width: 300
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

