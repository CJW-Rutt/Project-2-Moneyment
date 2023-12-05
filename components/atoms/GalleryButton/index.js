import React from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { DarkModeContext } from "../../../context/darkMode";
import { useContext } from "react";

export default function GalleryButton({ onImageSelect }) {
    const { isDarkMode } = useContext(DarkModeContext)

    const selectImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
        });

        if (result) {
            onImageSelect(result.assets[0].uri);
        }
    };

    return (
        <Pressable style={styles.container} onPress={selectImage}>
            <Text style={isDarkMode ? styles.textDark : styles.text}>SELECT IMAGE</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -1 },
        shadowOpacity: 0.25,
        shadowRadius: 6,
    },
    text: {
        color: "white",
        textAlign: 'center',
        fontWeight: "800",
        fontSize: 14
    },
    textDark: {
        color: "#212121",
        textAlign: 'center',
        fontWeight: "800",
        fontSize: 14
    }
});
