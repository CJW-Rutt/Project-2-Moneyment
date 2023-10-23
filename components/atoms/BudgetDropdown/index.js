
import React, { useState } from 'react';
import { Iconify } from 'react-native-iconify';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';

const DualDropdownMenu = () => {
    const [isModalVisible1, setModalVisible1] = useState(false);
    const [selectedOption1, setSelectedOption1] = useState('Week');
  
    const [isModalVisible2, setModalVisible2] = useState(false);
    const [selectedOption2, setSelectedOption2] = useState('Monday');
  
    const toggleModal1 = () => {
      setModalVisible1(!isModalVisible1);
    };
  
    const toggleModal2 = () => {
      setModalVisible2(!isModalVisible2);
    };
  
    const handleOptionSelect1 = (option) => {
      setSelectedOption1(option);
      toggleModal1();
    };
  
    const handleOptionSelect2 = (option) => {
      setSelectedOption2(option);
      toggleModal2();
    };
  return (
    <View style={styles.container}>
        <View style={styles.row}>
        <Text>Every</Text>
      <TouchableOpacity onPress={toggleModal1} style={styles.dropdownMenu}>
        <Text style={styles.dropdownButton}>{selectedOption1}</Text>
        <Iconify icon="il:arrow-down" width={10}/>
      </TouchableOpacity>
      </View>

      <Modal visible={isModalVisible1} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={toggleModal1} style={styles.closeButton}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleOptionSelect1('Week')} style={styles.option}>
            <Text style={styles.buttonText}>Week</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleOptionSelect1('Bi-Week')} style={styles.option}>
            <Text style={styles.buttonText}>Bi-Week</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleOptionSelect1('Month')} style={styles.option}>
            <Text style={styles.buttonText}>Month</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleOptionSelect1('Bi-Month')} style={styles.option}>
            <Text style={styles.buttonText}>Bi-Month</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleOptionSelect1('End of Month')} style={styles.option}>
            <Text style={styles.buttonText}>End of Month</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <View style={styles.row}>
        <Text>Starting on</Text>
      <TouchableOpacity onPress={toggleModal2} style={styles.dropdownMenu}>
        <Text style={styles.dropdownButton}>{selectedOption2}</Text>
        <Iconify icon="il:arrow-down" width={10}/>
      </TouchableOpacity>
      </View>

      <Modal visible={isModalVisible2} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={toggleModal2} style={styles.closeButton}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleOptionSelect2('Monday')} style={styles.option}>
            <Text style={styles.buttonText}>Monday</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleOptionSelect2('Tuesday')} style={styles.option}>
            <Text style={styles.buttonText}>Tuesday</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleOptionSelect2('Wednesday')} style={styles.option}>
            <Text style={styles.buttonText}>Wednesday</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleOptionSelect2('Thursday')} style={styles.option}>
            <Text style={styles.buttonText}>Thursday</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleOptionSelect2('Friday')} style={styles.option}>
            <Text style={styles.buttonText}>Friday</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleOptionSelect2('Saturday')} style={styles.option}>
            <Text style={styles.buttonText}>Saturday</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleOptionSelect2('Sunday')} style={styles.option}>
            <Text style={styles.buttonText}>Sunday</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    
  },
  row: {
    padding: 15,
    alignItems: "flex-start",
flexDirection: "row",
gap: 5,
  },
  dropdownButton: {
    padding: 10,
fontSize: 14,
fontWeight: "600",
  },
  dropdownMenu: {
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "flex-end"
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  closeButton: {
    backgroundColor: "#D4562E",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  option: {
    backgroundColor: '#6AB4AC',
    padding: 10,
    marginBottom: 5,
    borderRadius: 10,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: "#fff"
  }
});

export default DualDropdownMenu;



/*const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",

    },
    subhead: {
        fontSize: 16,
        paddingTop: 10,
        paddingLeft: 15,
    },
    title: {
backgroundColor: "#fff"
    }


})*/