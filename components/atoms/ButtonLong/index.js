import { Text, Pressable, StyleSheet } from "react-native"

// Returns Pressable element (basically a button that allows for stylizing) depending on text prop (string)

export default function ButtonLong({ text }) {
    return (
        <>
            {text && text === 'view' ? <Pressable style={[styles.button, styles.black]}>
                <Text style={styles.text}>View Transactions</Text>
            </Pressable> :
                text === 'saveBudget' ? <Pressable style={[styles.button, styles.orange]}>
                    <Text style={styles.text}>Save</Text>
                </Pressable> :
                    text === 'saveGoal' ? <Pressable style={[styles.button, styles.green]}>
                        <Text style={styles.text}>Save</Text>
                    </Pressable> : text === 'camera' ? <Pressable style={[styles.button, styles.primary]}>
                        <Text style={styles.text}>Open Camera</Text>
                    </Pressable> : text === 'photo' ? <Pressable style={[styles.button, styles.primary]}>
                        <Text style={styles.text}>Take photo</Text>
                    </Pressable> : <></>}
        </>
    )
}

styles = StyleSheet.create({
    button: {
        height: 43,
        width: 356,
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -1 },
        shadowOpacity: 0.25,
        shadowRadius: 6
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
        color: '#ffffff',
    },
    black: {
        backgroundColor: 'black',
    },
    orange: {
        backgroundColor: '#E58331'
    },
    green: {
        backgroundColor: '#508C46'
    },
    primary: {
        backgroundColor: '#429488'
    }
})