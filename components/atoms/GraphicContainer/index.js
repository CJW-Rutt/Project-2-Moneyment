import { View, StyleSheet } from "react-native";
import { Image } from "expo-image";

export default function GraphicContainer({ graphic, size }) {
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
    coffee: <Image source={require("../../../assets/graphics/category/Coffee.png")} alt='' style={styles.l} contentFit="contain" />,
    food: <Image source={require("../../../assets/graphics/category/Food.png")} alt='' style={styles.l} contentFit="contain" />,
    groceries: <Image source={require("../../../assets/graphics/category/Groceries.png")} alt='' style={styles.l} contentFit="contain" />,
    shopping: <Image source={require("../../../assets/graphics/category/Shopping.png")} alt='' style={styles.l} contentFit="contain" />,
  };

  return (
    <View style={styles.container}  > 
        {imageSources[graphic] || <></>}
    </View>
  ) 

/*
  const getAssetSource = (graphicName) => {
    console.log('graphicName: ' + graphicName);
    const folderPaths = [categoryAssetPath, stickersAssetPath];

    for (const folderPath of folderPaths) {
      const assetPath = `${folderPath}${graphicName}.png`;
      console.log(assetPath);
      try {
        const asset = Asset.fromModule(require(assetPath));
        if (asset.localUri) {
          return asset.localUri;
        }
      } catch (error) {
        console.error(`Error requiring asset: ${assetPath}`, error);
      }
    }

    return null;
  };

  const graphicSource = getAssetSource(graphic, size);

  const imageSize = size === "small" ? styles.smallImage : styles.defaultImage;

  if (!graphicSource) (

  return (
    <View style={styles.container}>
        <Image 
            source={{ uri: graphicSource }} 
            alt={{ uri: graphicSource }} 
            style={[styles.image, imageSize]} 
            contentFit="contain" 
        />
    </View>
  );*/
}

const styles = StyleSheet.create({
    container: {
      //style
    },
    image: {
      // style
    },
    defaultImage: {
      width: 50,
    },
    l: {
      width: 75,
      height: 75,
    },
});
