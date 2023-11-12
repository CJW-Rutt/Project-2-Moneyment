import React, { useState } from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from '@iconify/react';

const TransactionType = () => {
  const options = ['Debit Card', 'Credit Card', 'Cash'];
  const [selectedValue, setSelectedValue] = useState("Debit Card");

  return (
    <View style={styles.container}>
       <SelectDropdown
        data={options}
        onSelect={(selectedOption) => setSelectedValue(selectedOption)}
        buttonTextAfterSelection={(selectedOption) => {
          // Text to show after selection
          return selectedOption;
        }}
        rowTextForSelection={(item) => (
          <View style={styles.rowContainer}>
            <Text style={styles.valueText}>{item}</Text>
          </View>
        )}
        dropdownStyle={styles.dropdownStyle}
        dropdownTextStyle={styles.dropdownTextStyle}
        buttonTextStyle={styles.buttonTextStyle}
        buttonStyle={styles.buttonStyle}
     
        />
    </View>
        
  );
};

const styles = StyleSheet.create({
  container: {
  },
  dropdown: {

  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdownStyle: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 8,
  },
  dropdownTextStyle: {
    fontSize: 10,
    padding: 8,
  },
  buttonStyle: {
    height: 35,
    width: 350,
    margin: 12,
   borderWidth: 1,
    padding: 10,
    borderRadius: 5,
   backgroundColor: "#fff"
  },
  buttonTextStyle: {
    fontSize: 12,
    textAlign: "left"
  },
  valueText: {
    fontSize: 16,
    marginLeft: 10, // Add some space to the left
  },
});

export default TransactionType;
