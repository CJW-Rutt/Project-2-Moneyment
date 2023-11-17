
import React, { useState } from 'react';
import { Iconify } from 'react-native-iconify';
import { View, Text, TouchableOpacity, Modal, StyleSheet, ScrollView } from 'react-native';
import { Picker } from "@react-native-picker/picker"
import { DarkModeContext } from '../../../context/darkMode';
import { useContext } from 'react';
import { useTheme } from 'react-native-paper';

const DualDropdownMenu = () => {
	const { isDarkMode } = useContext(DarkModeContext)
	const theme = useTheme()

	const [selectedItem1, setSelectedItem1] = useState("Day");
	const [selectedItem2, setSelectedItem2] = useState('Next Week');

	const [isPickerVisible1, setPickerVisible1] = useState(false);
	const [isPickerVisible2, setPickerVisible2] = useState(false);

	const options1 = [
		{ label: 'Day', value: 'Day' },
		{ label: 'Week', value: 'Week' },
		{ label: '2 Weeks', value: '2 Weeks' },
		{ label: 'Month', value: 'Month' },

	];
	const options2 = [
		{ label: 'Today', value: 'Today' },
		{ label: 'Next Week', value: 'Next Week' },
		{ label: '2 Weeks', value: '2 Weeks' },
		{ label: 'Next Month', value: 'Next Month' },
	];

	return (
		<View style={styles.container}>
			<View style={styles.row}>
				<Text style={styles.label}>Every</Text>
				<TouchableOpacity onPress={() => setPickerVisible1(!isPickerVisible1)}>
					<View style={styles.selectedContainer}>
						<Picker
							style={[styles.picker, { color: theme.colors.primaryLight }]}
							selectedValue={selectedItem1}
							onValueChange={(value) => {
								setSelectedItem1(value);
								setPickerVisible1(false);
							}}
							dropdownIconColor={theme.colors.primaryLight}
						>
							<Picker.Item label={"Select An Option"} value={null} />
							{options1.map((option) => (
								<Picker.Item key={option.value} label={option.label} value={option.value} style={styles.pickerLabel} />
							))}
						</Picker>
					</View>
				</TouchableOpacity>
			</View>
			<View style={styles.row}>
				<Text style={styles.label}>Starting</Text>
				<TouchableOpacity onPress={() => setPickerVisible2(!isPickerVisible2)}>
					<View style={styles.selectedContainer}>
						<Picker
							style={[styles.picker, { color: theme.colors.primaryLight }]}
							selectedValue={selectedItem2}
							onValueChange={(value) => {
								setSelectedItem2(value);
								setPickerVisible2(false);
							}}
							dropdownIconColor={theme.colors.primaryLight}

						>
							{options2.map((option) => (
								<Picker.Item key={option.value} label={option.label} value={option.value} style={styles.pickerLabel} />
							))}
						</Picker>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 0,
		padding: 16,
	},
	label: {
		fontSize: 12,
		marginBottom: 5,
		padding: 10,
		paddingTop: 13,
		color: "#707070",
		minWidth: 70,
		alignItems: 'center',
	},
	selectedContainer: {
		paddingLeft: 10,
		alignContent: "center",
		gap: 5
	},
	picker: {
		alignSelf: "center",
		alignItems: 'center',
		justifyContent: "center",
		width: 150,
		border: "#ccc",
		borderWidth: 1,
	},
	pickerLabel: {
		fontSize: 12,
		fontWeight: "bold",
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
	},
});

export default DualDropdownMenu;



