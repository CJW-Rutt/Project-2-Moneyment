import { View, StyleSheet } from "react-native"
import { Image } from "expo-image"
import { useEffect, useState } from "react"
import orangeCalendar from "../../../assets/icons/calendar/orange.png"
import mango from "../../../assets/icons/fruits/Mango.png"
import darkGreenPlus from "../../../assets/icons/plus/darkGreen.png"

// designed for small icons

export default function IconContainer({ type, size, colour }) {
    const [source, setSource] = useState('')

    const data = [
        {
            category: 'calendar',
            colour: 'orange',
            source: orangeCalendar
        },
        {
            category: 'fruits',
            colour: 'mango',
            source: mango
        },
        {
            category: 'plus',
            colour: 'darkGreen',
            source: darkGreenPlus
        }
    ]

    function returnIcon() {
        const icon = data.filter(item => {
            return item.category === type && item.colour === colour
        })

        const link = icon[0].source

        setSource(link)
    }

    useEffect(() => {
        returnIcon()
    }, [])

    return (
        <>
            <View style={styles.container} >
                {size === 'xs' ? <Image style={styles.xs} source={source} contentFit="contain" /> :
                    size === 'xl' ? <Image style={styles.xl} source={source} contentFit="contain" /> : <></>}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 45,
        height: 45
    },
    xs: {
        width: 28,
        height: 28
    },
    xl: {
        width: 50,
        height: 50
    }
})