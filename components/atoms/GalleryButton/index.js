import React, { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';


export default function GalleryButton({ onImageSelect }) {
    
    const selectImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3], //need to make this bigger?
        });
        console.log('Image Picker Result:', result);
        if (!result.canceled) {
            onImageSelect(result.assets[0].uri);
        }
    };

    return (
        <View style={styles.container}>
            <Button title="Select Image" onPress={selectImage} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 43,
        width: 356,
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -1 },
        shadowOpacity: 0.25,
        shadowRadius: 6,
        backgroundColor: '#429488'
    },
});
