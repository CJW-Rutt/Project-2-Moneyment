import { StyleSheet, View } from 'react-native';

import AddTransactionSingle from '../components/organisms/Add/AddTransactionSingle';
import TopHeader from '../components/molecules/TopHeader';


export default function Add() {
    
    return (

        <View style={styles.container}>
            <TopHeader title='Add' />
            <AddTransactionSingle />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
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
    modalContainer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    modalHeader:{
        flex: 1,
        flexDirection: 'row',
        maxHeight: 100,
        width: '100%',
        borderBottomWidth: 1,
        borderColor: 'lightgray',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingBottom: 15,
    },
    headerTitle: {
        fontSize: 18,
        textAlign: 'left',
        fontWeight: 'bold',
        width: '100%',
        paddingLeft: 80
    },
    closeButton: {
        paddingLeft: 80
    }
});
