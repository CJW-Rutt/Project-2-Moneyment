import InputField from "../../atoms/InputField";
import BudgetDropdown from "../../atoms/BudgetDropdown";
import ToggleSwitch from "../../atoms/Switch";
import React, { useState } from 'react';
import { Text, StyleSheet, View, ScrollView } from "react-native";


export default function BudgetForm() {
  return (
    <>
   
    <View style={styles.mainContainer}>
    <ScrollView>
      <View style={styles.inputContainer}>
      <Text style={styles.title}>General Information</Text>
      <InputField/>
      </View>
      <View style={styles.dropdownContainer}>
   <View style={styles.row}>
      <Text style={styles.title}>Recurrence</Text>
      </View>
              <BudgetDropdown/>
      </View>
      </ScrollView>
    </View>

    </>
  )
}
const styles = StyleSheet.create({
   
    maincontainer: {


    },
    dropdownContainer: {

    },
    row: {
flexDirection: "row",
paddingRight: 10,
alignItems: "center",
justifyContent: "space-between"
    },
    inputContainer: {
      paddingTop: 10,
      paddingBottom: 10,
      borderBottomWidth: 1,
     borderBottomEndRadius: 10,
     borderBottomStartRadius: 10,
borderColor: "#A9A9A9"
    },
    title: {
      paddingLeft: 14,
      paddingTop: 10,
fontSize: 18,
fontWeight: "600",

paddingBottom: 10,
    },


});