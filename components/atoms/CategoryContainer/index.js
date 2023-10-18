import React from "react";
import { View, StyleSheet } from "react-native";
import { Image } from "expo-image";

export default function CategoryContainer({ category, size }) {
  const imageSources = {
    coffee: require("../../../assets/graphics/category/Coffee.png"),
    food: require("../../../assets/graphics/category/Food.png"),
    groceries: require("../../../assets/graphics/category/Groceries.png"),
    shopping: require("../../../assets/graphics/category/Shopping.png"),
  };

  const iconStyle = size === "s" ? styles.s : styles.m;

  return (
    <View style={styles.container} >
      <Image source={imageSources[category]} alt='' style={[styles.icon, iconStyle]} contentFit="contain" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    s: {
        width: 20,
        height: 20,
    },
    m: {
        width: 28,
        height: 28,
    },
});