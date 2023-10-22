import { StyleSheet, View, Text } from 'react-native';
import { List } from 'react-native-paper';

const BudgetDropdown = () => (

    <List.AccordionGroup style={styles.container}>
        <List.Accordion style={styles.title} title="Day" id="1">
            <List.Item style={styles.item} title="Item 1" />
        </List.Accordion>
        <List.Accordion style={styles.title} title="Week" id="2">
            <List.Item style={styles.item} title="Item 2" />
        </List.Accordion>
        <List.Accordion style={styles.title} title="Month" id="3">
            <List.Item style={styles.item} title="Item 3" />
        </List.Accordion>
        <List.Accordion style={styles.title} title="Year" id="4">
            <List.Item style={styles.item} title="Item 4" />
        </List.Accordion>
        <List.Accordion style={styles.title} title="All" id="5">
            <List.Item style={styles.item} title="Item 5" />
        </List.Accordion>

    </List.AccordionGroup>
);

export default BudgetDropdown;


const styles = StyleSheet.create({
    container: {
        color: '#ffff'
    },
    title: {
        backgroundColor: '#ffff'

    },
    item: {
        backgroundColor: '#fff'
    }


})