import { View, StyleSheet, Dimensions, Pressable } from "react-native"
import { Text, Divider } from "react-native-paper"
import Icon from 'react-native-vector-icons/FontAwesome5'
import { DarkModeContext } from "../../../context/darkMode";
import { useContext, useState, useEffect } from "react";
import { auth } from "../../../firebase/firebase.config";
import { onAuthStateChanged } from "firebase/auth";

const screenWidth = Dimensions.get('screen').width;

export default function TopHeader({
    title = 'test',
    type,
    func
}) {
    const { isDarkMode } = useContext(DarkModeContext)
    const [signedIn, setSignedIn] = useState(false)

    const checkUser = async () => {
        await onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                console.log('signed in on TopHeader', uid)
                setSignedIn(true)
            } else {
                setSignedIn(false)
                console.log('not signed in')
            }
        })
    }

    useEffect(() => {
        checkUser()
    }, [])

    return (
        <>
            <View style={signedIn ? styles.container : styles.demoContainer}>
                {
                    type === 'close'
                        ? <Pressable onPress={func} style={signedIn ? styles.icon : styles.demoIcon}>
                            {isDarkMode
                                ? <Icon name='arrow-left' size={25} color='#fff' />
                                : <Icon name='arrow-left' size={25} color='#000' />}
                        </Pressable>
                        : <></>
                }
                <Text variant="titleLarge" style={signedIn ? styles.text : styles.demoText}>
                    {title}
                </Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        minHeight: 70,
        width: screenWidth,
        maxHeight: 70,
        flex: 1,
        // justifyContent: 'space-between',
        flexDirection: 'row',
        borderBottomColor: '#A9A9A9',
        borderBottomWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    demoContainer: {
        minHeight: 90,
        width: screenWidth,
        maxHeight: 90,
        flex: 1,
        // justifyContent: 'space-between',
        flexDirection: 'row',
        borderBottomColor: '#A9A9A9',
        borderBottomWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    text: {
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 10,
        fontWeight: 800
    },
    demoText: {
        textAlign: 'center',
        marginTop: 55,
        marginBottom: 5,
        fontWeight: 800
    },
    icon: {
        position: 'absolute',
        left: 20,
    },
    demoIcon: {
        position: 'absolute',
        left: 20,
        bottom: 5
    }
})