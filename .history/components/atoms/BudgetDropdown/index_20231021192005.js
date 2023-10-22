import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { List, TextInput } from 'react-native-paper';


const BudgetDropdown = () => {

    const [text, onChangeText] = useState('');
    const [number, onChangeNumber] = useState('');
    return (
        <List.AccordionGroup style={styles.container}>

            <List.Accordion style={styles.title} title="Day" id="2">
                <List.Item style={styles.item} title="Item 1" />
            </List.Accordion>
            <List.Accordion style={styles.title} title="Week" id="3">
                <List.Item style={styles.item} title="Item 2" />
            </List.Accordion>
            <List.Accordion style={styles.title} title="Month" id="4">
                <TextInput
                    sstyle={styles.title
                    onChangeText={onChangeText}
                    value={text}
                />
            </List.Accordion>
            <List.Accordion style={styles.title} title="Year" id="5">
                <TextInput
                    style={styles.title}
                    onChangeText={onChangeNumber}
                    value={number}
                    keyboardType="numeric"
                />
            </List.Accordion>
            <List.Accordion style={styles.title} title="All" id="6">
                <List.Item style={styles.item} title="Item 5" />
            </List.Accordion>

        </List.AccordionGroup >
    )
};

export default BudgetDropdown;


const styles = StyleSheet.create({
    container: {

    },
    title: {
        backgroundColor: '#ffff',
        fontSize: 12,
        width: 150,
        color: '#000'


    }


})