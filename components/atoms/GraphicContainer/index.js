import { View, StyleSheet } from "react-native";
import { Image } from "expo-image";

export default function GraphicContainer({ graphic }) {
  const imageSources = {
    apple: <Image source={require("../../../assets/graphics/stickers/Apple.png")} alt='' style={styles.l} contentFit="contain" />,
    banana: <Image source={require("../../../assets/graphics/stickers/Banana.png")} alt='' style={styles.l} contentFit="contain" />,
    blackberry: <Image source={require("../../../assets/graphics/stickers/Blackberry.png")} alt='' style={styles.l} contentFit="contain" />,
    blueberry: <Image source={require("../../../assets/graphics/stickers/Blueberry.png")} alt='' style={styles.l} contentFit="contain" />,
    cherry: <Image source={require("../../../assets/graphics/stickers/Cherry.png")} alt='' style={styles.l} contentFit="contain" />,
    eggplant: <Image source={require("../../../assets/graphics/stickers/Eggplant.png")} alt='' style={styles.l} contentFit="contain" />,
    grape: <Image source={require("../../../assets/graphics/stickers/Grape.png")} alt='' style={styles.l} contentFit="contain" />,
    lemon: <Image source={require("../../../assets/graphics/stickers/Lemon.png")} alt='' style={styles.l} contentFit="contain" />,
    mango: <Image source={require("../../../assets/graphics/stickers/Mango.png")} alt='' style={styles.l} contentFit="contain" />,
    onion: <Image source={require("../../../assets/graphics/stickers/Onion.png")} alt='' style={styles.l} contentFit="contain" />,
    orange: <Image source={require("../../../assets/graphics/stickers/Orange.png")} alt='' style={styles.l} contentFit="contain" />,
    peach: <Image source={require("../../../assets/graphics/stickers/Peach.png")} alt='' style={styles.l} contentFit="contain" />,
    pear: <Image source={require("../../../assets/graphics/stickers/Pear.png")} alt='' style={styles.l} contentFit="contain" />,
    pineapple: <Image source={require("../../../assets/graphics/stickers/Pineapple.png")} alt='' style={styles.l} contentFit="contain" />,
    pumpkin: <Image source={require("../../../assets/graphics/stickers/Pumpkin.png")} alt='' style={styles.l} contentFit="contain" />,
    strawberry: <Image source={require("../../../assets/graphics/stickers/Strawberry.png")} alt='' style={styles.l} contentFit="contain" />,
    tomato: <Image source={require("../../../assets/graphics/stickers/Tomato.png")} alt='' style={styles.l} contentFit="contain" />,
    usedApple: <Image source={require("../../../assets/graphics/stickers/UsedApple.png")} alt='' style={styles.l} contentFit="contain" />,
  };

  return (
    <View style={styles.container}  > 
        {imageSources[graphic] || <></>}
    </View>
  ) 
}

const styles = StyleSheet.create({
    l: {
        width: 75,
        height: 75,
    },
});
