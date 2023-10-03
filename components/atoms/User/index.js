import { Text, View } from "react-native"
import { StyleSheet } from "react-native"

export default function User({size}) {

    // function printSize(msg) {
    //     console.log(msg)
    // }

    // printSize(size)

    return (
        <>
            {size === 'xs' ? <View style={[styles.container, styles.xs]} /> :
            size === 's' ? <View style={[styles.container, styles.s]} /> :
            size === 'm' ? <View style={[styles.container, styles.m]} /> :
            size === 'l' ? <View style={[styles.container, styles.l]} /> :
            size === 'xl' ? <View style={[styles.container, styles.xl]} /> :
            size === 'xxl' ? <View style={[styles.container, styles.xxl]} /> :

            <Text>No</Text>}
            
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 100,
        backgroundColor: 'blue',
    },
    xs: {
        width: 32,
        height: 32
    },
    s: {
        width: 48,
        height: 48
    },
    m: {
        width: 64,
        height: 64
    },
    l: {
        width: 80,
        height: 80
    },    
    xl: {
        width: 120,
        height: 120
    },    
    xxl: {
        width: 180,
        height: 180
    },
})