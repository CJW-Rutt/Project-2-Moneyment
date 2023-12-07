
import React, { useState } from 'react';
import { View, TouchableOpacity, Modal, StyleSheet, ScrollView } from 'react-native';
import { Picker } from "@react-native-picker/picker"
import { DarkModeContext } from '../../../context/darkMode';
import { useContext } from 'react';
import { useTheme, Text } from 'react-native-paper';

export default function DualDropdownMenu({toggle}) {
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
			{toggle
				? <>
					<View style={styles.row}>
						<Text style={isDarkMode ? styles.labelDark : styles.label}>Every</Text>
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
						<Text style={isDarkMode ? styles.labelDark : styles.label}>Starting</Text>
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
				</>
				: <>
				</>}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 0,
		paddingLeft: 20,
		paddingRight: 20
	},
	label: {
		fontSize: 12,
		color: "#707070",
		alignItems: 'center',
	},
	labelDark: {
		fontSize: 12,
		color: "#CFCFCF",
		alignItems: 'center',
	},
	selectedContainer: {
		alignContent: "center",
	},
	picker: {
		width: 150,
		border: "#ccc",
		borderWidth: 1,
	},
	pickerLabel: {
		fontSize: 12,
		fontWeight: "800",
	},
	pickerContainer: {
		justifyContent: "center",
		borderBottomColor: "#000",
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		gap: 20,
		width: "100%",
	},
	checkBoxContainer: {
		flexDirection: 'row',
		alignItems: 'center'
	}
});



