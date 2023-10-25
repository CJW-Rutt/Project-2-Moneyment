
import React, { useState } from 'react';
import { Iconify } from 'react-native-iconify';
import { View, Text, TouchableOpacity, Modal, StyleSheet, ScrollView } from 'react-native';
import { Picker } from "@react-native-picker/picker"

const DualDropdownMenu = () => {
  const [selectedOption1, setSelectedOption1] = useState('Week');
  const [selectedOption2, setSelectedOption2] = useState('Next Week');

  const options1 = ['Day', 'Week', "2 Weeks", "Month"];
  const options2 = ['Today', 'Next Week', "2 Weeks", "Next Month"];

  return (
    <View style={styles.container}>
       <View style={styles.row}>
        <Text style={styles.label}>Every</Text>
        <View style={styles.pickerContainer}>
      <Picker
        selectedValue={selectedOption1}
        onValueChange={(itemValue) => setSelectedOption1(itemValue)}
        style={styles.picker}>
    
        {options1.map((option, index) => (
          <Picker.Item key={index} label={option} value={option} />
        ))}
      </Picker>
      </View>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Starting</Text>
        <View style={styles.pickerContainer}>
      <Picker
        selectedValue={selectedOption2}
        onValueChange={(itemValue) => setSelectedOption2(itemValue)}
        style={styles.picker}
      >
        {options2.map((option, index) => (
          <Picker.Item key={index} label={option} value={option} />
        ))}
      </Picker>
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
  },
  picker: {
    width: 200,
    height: 40,

  },
  pickerContainer: {
    marginLeft: 5,
    justifyContent: "center",
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 20,
  
  }
});



export default DualDropdownMenu;



