import { StyleSheet, Text, View, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { DarkModeContext } from '../../../context/darkMode';
import { useContext } from 'react'

export default function LongTextButton({ type, onPress }) {

    const { isDarkMode } = useContext(DarkModeContext);

    const buttonTextArr = [
        { type: 'transactions', title: 'Transactions', description: 'Easily incorporate new transactions into the app through receipt scanning, importing SVG files, or manual input' },
        { type: 'accounts', title: 'Bank Accounts', description: 'Effortlessly link your bank accounts to gain immediate access to up-to-the-minute transaction updates' },
        { type: 'scan', title: 'Scan Receipts', description: 'Effortlessly capture receipt details by taking a photo for automatic logging' },
        { type: 'manual', title: 'Manual Input', description: 'Take control by manually logging bank transactions and additional expenses' },
        { type: 'statements', title: 'Import Statements', description: 'Import data to transfer information from your bank statements' },
    ];

    const stylesForType = {
        transactions: {
            maxHeight: 130,
            minWidth: 349,
            maxWidth: 349,
        },
        accounts: {
            maxHeight: 130,
            minWidth: 349,
            maxWidth: 349,
        },
        scan: {
            maxHeight: 110,
            minWidth: 349,
            maxWidth: 349,
        },
        manual: {
            maxHeight: 110,
            minWidth: 349,
            maxWidth: 349,
        },
        statements: {
            maxHeight: 110,
            minWidth: 349,
            maxWidth: 349,
        },
    };

    const selectedStyle = stylesForType[type] || {};

    const index = buttonTextArr.findIndex(item => item.type === type);

    if (index === -1) {
        return <Text>Type Not Found</Text>;
    }

    const title = buttonTextArr[index].title;
    const description = buttonTextArr[index].description;

    return (
        <Pressable onPress={onPress}>
            <View style={isDarkMode ? { ...styles.containerDark, ...selectedStyle } : { ...styles.container, ...selectedStyle }}>
                <View style={styles.titleRow}>
                    <View style={styles.title}>
                        <Text style={isDarkMode ? styles.titleTextDark : styles.titleText}>{title}</Text>
                    </View>
                    <View style={styles.icon}>
                        {
                            isDarkMode ?
                                <Icon name='angle-right' size={15} color='#212121' /> :
                                <Icon name='angle-right' size={15} color='#fff' />
                        }
                    </View>
                </View>
                <View style={styles.descText}>
                    <Text style={isDarkMode ? styles.descriptionTextDark : styles.descriptionText}>{description}</Text>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#429488',
        borderBottomLeftRadius: 15,
        borderTopRightRadius: 15,
        padding: 20,
        marginTop: 20,
    },
    containerDark: {
        flex: 1,
        backgroundColor: '#95D6CD',
        borderBottomLeftRadius: 15,
        borderTopRightRadius: 15,
        padding: 20,
        marginTop: 20,
    },
    titleRow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        maxHeight: 25,
    },
    title: {
        flex: 3,
        color: '#fff',

    },
    titleText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    titleTextDark: {
        color: '#212121',
        fontSize: 18,
        fontWeight: 'bold',
    },
    icon: {
        flex: 1,
        alignItems: 'flex-end',
    },
    descText: {
        marginTop: 10,
        fontSize: 12,
        width: '90%',
    },
    descTextDark: {
        marginTop: 10,
        fontSize: 12,
        width: '90%',
        color: '#212121'
    },
    descriptionText: {
        color: '#fff',
    }
});