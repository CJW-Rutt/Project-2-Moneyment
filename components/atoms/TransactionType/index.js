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
        rowTextForSelection={(item) => {
          return item
        }}
        dropdownStyle={styles.dropdownStyle}
        rowTextStyle={styles.rowTextStyle}
        selectedRowStyle={styles.selectedRowStyle}
        selectedRowTextStyle={styles.selectedRowTextStyle}
        buttonTextStyle={styles.buttonTextStyle}
        buttonStyle={styles.buttonStyle}
        rowStyle={styles.rowStyle}

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
  rowStyle: {
    height: 40,
    padding: 12,
    paddingLeft: 5,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  dropdownStyle: {
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderWidth: 1,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    marginTop: 5,
    color: 'black',
  },
  rowTextStyle: {
    fontSize: 12,
    color: 'grey'
  },
  selectedRowStyle: {
    // backgroundColor: 'rgb(240,240,240)'
  },
  selectedRowTextStyle: {
    fontWeight: '600',
    color: 'black'
  },
  buttonStyle: {
    height: 35,
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#707070",
    backgroundColor: "white",
  },
  buttonTextStyle: {
    fontSize: 12,
    textAlign: "left",
    marginLeft: 0,
    color: 'black'
  },
  valueText: {
    fontSize: 16,
    color: 'black',
    marginLeft: 10, // Add some space to the left
  },
});

export default TransactionType;
