import { Image } from "expo-image"
import { View, StyleSheet, ScrollView, TouchableOpacity, Text } from "react-native"

export default function CategoryCard ({ icon, size,} ) {

    return (
      <View style={styles.container}>
<View style={styles.row}>
<Image source={require("../../../../assets/graphics/category/Food.png")} style={styles.xl} alt="food"/>
<View style={styles.col}>
<Text style={styles.titlecard}>Food</Text>
</View>
<View style={styles.balancecontainer}>
<View style={styles.col}>
<Text style={styles.balance}>$200</Text>
</View>
</View>
</View>
<View style={styles.row}>
<Image source={require("../../../../assets/graphics/category/Groceries.png")} style={styles.xl} alt="groceries"/>
<View style={styles.col}>
<Text style={styles.titlecard}>Groceries</Text>
</View>
<View style={styles.balancecontainer}>
<View style={styles.col}>
<Text style={styles.balance}>$200</Text>
</View>
</View>
</View>
<View style={styles.row}>
<Image source={require("../../../../assets/graphics/category/Coffee.png")} style={styles.xl} alt="Coffee"/>
<View style={styles.col}>
<Text style={styles.titlecard}>Coffee</Text>
</View>
<View style={styles.balancecontainer}>
<View style={styles.col}>
<Text style={styles.balance}>$200</Text>
</View>
</View>
</View>
<View style={styles.row}>
<Image source={require("../../../../assets/graphics/category/Shopping.png")} style={styles.xl} alt="shopping"/>
<View style={styles.col}>
<Text style={styles.titlecard}>Shopping</Text>
</View>
<View style={styles.balancecontainer}>
<View style={styles.col}>
<Text style={styles.balance}>$200</Text>
</View>
</View>
</View>

      </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "auto",
        backgroundColor: "#fff",
        
    },
    balancecontainer: {
        marginLeft: 50,
        flexDirection: "row",
        alignItems: "center",
     
        
    },
    balance: {
       fontSize: 16,
       textAlign: "right"
    },
    row: {
flexDirection: "row",
alignItems: "center",
paddingTop: 20,
paddingBottom: 20,
justifyContent: "space-around",
borderBottomWidth: 1,
borderBottomColor: "#d3d3d3"
    },
    col: {
width: 100,
    },
    xs: { 
        width: 12,
        height: 12,
    
    },
    s: {
        width: 16,
        height: 16,

    },
    l: {
        width: 24,
        height: 24,

    },
    xl: {
        width: 36,
        height: 36,
      
    },
    titlecard: {
        fontSize: 24,
    }

})