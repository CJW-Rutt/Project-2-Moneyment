import { View, StyleSheet, Dimensions, Pressable } from "react-native"
import { Text, Divider } from "react-native-paper"
import Icon from 'react-native-vector-icons/FontAwesome5'
import { DarkModeContext } from "../../../context/darkMode";
import { useContext } from "react";

const screenWidth = Dimensions.get('screen').width;

export default function TopHeader({
    title = 'test',
    type,
    func
}) {
    const { isDarkMode } = useContext(DarkModeContext)
    return (
        <>
            <View style={styles.container}>
                {
                    type === 'close'
                        ? <Pressable onPress={func} style={styles.icon}>
                            {isDarkMode
                                ? <Icon name='arrow-left' size={25} color='#fff' />
                                : <Icon name='arrow-left' size={25} color='#000' />}
                        </Pressable>
                        : <></>
                }
                <Text variant="titleLarge" style={styles.text}>
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
    text: {
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 10,
        fontWeight: 800
    },
    icon: {
        position: 'absolute',
        left: 20
    }
})