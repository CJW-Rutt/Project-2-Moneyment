import { View, StyleSheet } from "react-native"

// Returns View with coloured background depending on colour prop ('black' or 'gray')

export default function PageIndicatorAtom({ colour }) {
    return (
        <>
            {colour && colour === 'gray' ? <View style={[styles.indicator, styles.gray]}></View> :
                colour === 'black' ? <View style={[styles.indicator, styles.black]}></View> :
                    <></>}
        </>
    )
}

const styles = StyleSheet.create({
    indicator: {
        height: 4,
        width: 10.35,
        borderRadius: 10
    },
    gray: {
        backgroundColor: '#A9A9A9'
    },
    black: {
        backgroundColor: '#000000'
    }
})