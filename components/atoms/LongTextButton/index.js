import { StyleSheet, Text, View, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'

// Don't overwrite my files without discussing it with me first. (Corey)

export default function LongTextButton({ type, onPress }) {

    const buttonTextArr = [
        { type: 'transactions', title: 'Transactions', description: 'Easily incorporate new transactions into the app through receipt scanning, importing SVG files, or manual input'},
        { type: 'accounts', title: 'Bank Accounts', description: 'Effortlessly link your bank accounts to gain immediate access to up-to-the-minute transaction updates'},
        { type: 'scan', title: 'Scan Receipts', description: 'Effortlessly capture receipt details by taking a photo for automatic logging'},
        { type: 'manual', title: 'Manual Input', description: 'Take control by manually logging bank transactions and additional expenses'},
        { type: 'statements', title: 'Import Statements', description: 'Import data to transfer information from your bank statements'},
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

    const index = buttonTextArr.findIndex( item => item.type === type);

    if ( index === -1 ){
        return <Text>Type Not Found</Text>;
    }

    const title = buttonTextArr[index].title;
    const description = buttonTextArr[index].description;

    return (
        <Pressable onPress={onPress}>
            <View style={{ ...styles.container, ...selectedStyle }}>
                <View style={styles.titleRow}>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>{title}</Text>
                    </View>
                    <View style={styles.icon}>
                        <Icon name='angle-right' size={15} color='#fff' />
                    </View>
                </View>
                <View style={styles.descText}>
                    <Text style={styles.descriptionText}>{description}</Text>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6AB4AC',
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
    icon: {
        flex: 1,
        alignItems: 'flex-end',
    },
    descText: {
        marginTop: 10,
        fontSize: 12,
        width: '90%',
    },
    descriptionText: {
        color: '#fff',
    }
});