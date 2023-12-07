import { Text, View, StyleSheet } from "react-native"
import { Image } from "expo-image"

// designed for user's avatar image

export default function User({ size, url }) {
    const blurhash = '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

    return (
        <>
            {size === 'xs' ? <Image style={[styles.container, styles.xs]} source={url} placeholder={blurhash} contentFit="cover" /> :
                size === 's' ? <Image style={[styles.container, styles.s]} source={url} placeholder={blurhash} contentFit="cover" /> :
                    size === 'm' ? <Image style={[styles.container, styles.m]} source={url} placeholder={blurhash} contentFit="cover" /> :
                        size === 'l' ? <Image style={[styles.container, styles.l]} source={url} placeholder={blurhash} contentFit="cover" /> :
                            size === 'xl' ? <Image style={[styles.container, styles.xl]} source={url} placeholder={blurhash} contentFit="cover" /> :
                                size === 'xxl' ? <Image style={[styles.container, styles.xxl]} source={url} placeholder={blurhash} contentFit="cover" /> :

                                    <Text>No</Text>}

        </>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 100,
        backgroundColor: 'blue'
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