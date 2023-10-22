import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { List, TextInput } from 'react-native-paper';


const BudgetDropdown = () => {

    const [text, onChangeText] = useState('');
    const [number, onChangeNumber] = useState('');
    return (
        <List.AccordionGroup style={styles.container}>

            <List.Accordion style={styles.title} title="Day" id="2">
                <TextInput
                    style={styles.title}
                    onChangeText={onChangeNumber}
                    value={number}
                    keyboardType="numeric"
                    textColor='#000'
                />

            </List.Accordion>
            <List.Accordion style={styles.title} title="Week" id="3">
                <List.Item style={styles.item} title="Item 2" />
            </List.Accordion>
            <List.Accordion style={styles.title} title="Month" id="4">
                <List.Item style={styles.item} title="January" />
                <List.Item style={styles.item} title="February" />
                <List.Item style={styles.item} title="March" />
                <List.Item style={styles.item} title="April" />
                <List.Item style={styles.item} title="May" />
                <List.Item style={styles.item} title="June" />
                <List.Item style={styles.item} title="July" />
                <List.Item style={styles.item} title="August" />
                <List.Item style={styles.item} title="September" />
                <List.Item style={styles.item} title="October" />
                <List.Item style={styles.item} title="November" />
                <List.Item style={styles.item} title="December" />
            </List.Accordion>
            <List.Accordion style={styles.title} title="Year" id="5">
                <TextInput
                    style={styles.title}
                    onChangeText={onChangeNumber}
                    value={number}
                    keyboardType="numeric"
                    textColor='#000'
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