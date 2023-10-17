import { View, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Asset } from "expo-asset";

// Define the asset paths outside the component function
const categoryAssetPath = "../../../assets/graphics/category/";
const stickersAssetPath = "../../../assets/graphics/stickers/";

export default function GraphicContainer({ graphic, size }) {
  const getAssetSource = (graphicName) => {
    console.log('graphicName: ' + graphicName);
    const folderPaths = [categoryAssetPath, stickersAssetPath];

    // Try to find the asset in each base path.
    for (const folderPath of folderPaths) {
      const assetPath = `${folderPath}${graphicName}.png`;
      console.log(assetPath);
      try {
        // Attempt to require the asset and handle any potential errors.
        const asset = Asset.fromModule(require(assetPath));
        if (asset.localUri) {
          return asset.localUri; // Found asset
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
    return null; // Return null if the gfx is not found in either folder
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
      // Common style for the container
    },
    image: {
      // Common style for the image
    },
    defaultImage: {

    },
    smallImage: {
      width: 75,
      height: 75,
    },
});
