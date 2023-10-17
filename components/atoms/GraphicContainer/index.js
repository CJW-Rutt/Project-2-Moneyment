import { View, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Asset } from "expo-asset";

const categoryAssetPath = "../../../assets/graphics/category/";
const stickersAssetPath = "../../../assets/graphics/stickers/";

export default function GraphicContainer({ graphic, size }) {
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

  if (!graphicSource) {
    return null;
  }

  return (
    <View style={styles.container}>
        <Image 
            source={{ uri: graphicSource }} 
            alt={{ uri: graphicSource }} 
            style={[styles.image, imageSize]} 
            contentFit="contain" 
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      //style
    },
    image: {
      // style
    },
    defaultImage: {

    },
    smallImage: {
      width: 75,
      height: 75,
    },
});
