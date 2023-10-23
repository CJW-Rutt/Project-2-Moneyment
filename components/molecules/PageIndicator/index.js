import PageIndicatorAtom from "../../atoms/PageIndicatorAtom"
import { View, StyleSheet } from "react-native"

// Currently hardcoded to show different states depending on position and count prop (integer)

export default function PageIndicator({position, count}) {
    return (
        <>
            {count === 3 && position === 1 ? <View style={styles.container}>
                <PageIndicatorAtom colour='black' style={styles.indicator} />
                <PageIndicatorAtom colour='gray' style={styles.indicator} />
                <PageIndicatorAtom colour='gray' style={styles.indicator} />
            </View> : count === 3 && position === 2 ? <View style={styles.container}>
                <PageIndicatorAtom colour='gray' style={styles.indicator} />
                <PageIndicatorAtom colour='black' style={styles.indicator} />
                <PageIndicatorAtom colour='gray' style={styles.indicator} />
            </View> : count === 3 && position === 3 ? <View style={styles.container}>
                <PageIndicatorAtom colour='gray' style={styles.indicator} />
                <PageIndicatorAtom colour='gray' style={styles.indicator} />
                <PageIndicatorAtom colour='black' style={styles.indicator} />
            </View> : count === 2 && position === 1 ? <View style={styles.container}>
                <PageIndicatorAtom colour='black' style={styles.indicator} />
                <PageIndicatorAtom colour='gray' style={styles.indicator} />
            </View> : count === 2 && position === 2 ? <View style={styles.container}>
                <PageIndicatorAtom colour='gray' style={styles.indicator} />
                <PageIndicatorAtom colour='black' style={styles.indicator} />
            </View> : <></>}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 5
    }
})