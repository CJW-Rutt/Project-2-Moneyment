
import React, { useState } from 'react';
import { Iconify } from 'react-native-iconify';
import { View, Text, TouchableOpacity, Modal, StyleSheet, ScrollView } from 'react-native';
import { Picker } from "@react-native-picker/picker"

const DualDropdownMenu = () => {
  const [selectedItem1, setSelectedItem1] = useState("Day");
  const [selectedItem2, setSelectedItem2] = useState('Next Week');

  const [isPickerVisible1, setPickerVisible1] = useState(false);
  const [isPickerVisible2, setPickerVisible2] = useState(false);
  const options1 = [
    { label: 'Day',  value: 'Day' },
    { label: 'Week',  value: 'Week' },
    { label: '2 Weeks',  value: '2 Weeks' },
    { label: 'Month',  value: 'Month' },
     
  ];
  const options2 = [ 
    { label: 'Today',  value: 'Today' },
    { label: 'Next Week',  value: 'Next Week' },
    { label: '2 Weeks',  value: '2 Weeks' },
    { label: 'Next Month',  value: 'Next Month' },
];

  return (
    <View style={styles.container}>
           <View style={styles.row}>
        <Text style={styles.label}>Every</Text>
        <TouchableOpacity onPress={() => setPickerVisible1(!isPickerVisible1)}>
        <View style={styles.selectedContainer}>
        <Text style={styles.selectedItemText}>{selectedItem1}</Text>
        <Iconify icon="il:arrow-down" width={10}/>
        </View>
        </TouchableOpacity>

        </View>

      {isPickerVisible1 && (
        <Picker
        style={styles.picker}
          selectedValue={selectedItem1}
          onValueChange={(value) => {
            setSelectedItem1(value);
            setPickerVisible1(false);
          }}
        >
          <Picker.Item label={"Select An Option"} value={null} />
          {options1.map((option) => (
            <Picker.Item key={option.value} label={option.label} value={option.value} />
          ))}
        </Picker>
      )}
             <View style={styles.row}>
        <Text style={styles.label}>Starting</Text>
        <TouchableOpacity onPress={() => setPickerVisible2(!isPickerVisible2)}>
        <View style={styles.selectedContainer}>
        <Text style={styles.selectedItemText}>{selectedItem2}</Text>
        <Iconify icon="il:arrow-down" width={10}/>
        </View>
        </TouchableOpacity>

        </View>

      {isPickerVisible2 && (
        <Picker
        style={styles.picker}
          selectedValue={selectedItem2}
          onValueChange={(value) => {
            setSelectedItem2(value);
            setPickerVisible2(false);
          }}
        >
          <Picker.Item label="Select An Option" value={null} />
          {options2.map((option) => (
            <Picker.Item key={option.value} label={option.label} value={option.value} />
          ))}
        </Picker>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    padding: 10,
    color: "#707070"
  },
  selectedContainer: {

flexDirection: "row",
paddingLeft: 10,
alignContent: "center",
gap: 5
  },
  picker: {
    alignSelf: "center",
    justifyContent: "center",
    width: 300,
    height: 190,
    borderBottomWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    border: "#ccc",
    borderWidth: 1,
  },
  pickerContainer: {
    marginLeft: 5,
    justifyContent: "center",
    borderBottomColor: "#000",

  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 20,
  
  },
  selectedItemText: {
    fontSize: 16,
    fontWeight: "600",
    
  },
});



export default DualDropdownMenu;



