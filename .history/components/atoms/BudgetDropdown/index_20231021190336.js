import { StyleSheet, View, Text } from 'react-native';
import { List, TextInput } from 'react-native-paper';

const [text, setText] = useState("");
const BudgetDropdown = () => (

    <List.AccordionGroup style={styles.container}>

        <List.Accordion style={styles.title} title="Day" id="2">
            <List.Item style={styles.item} title="Item 1" />
        </List.Accordion>
        <List.Accordion style={styles.title} title="Week" id="3">
            <List.Item style={styles.item} title="Item 2" />
        </List.Accordion>
        <List.Accordion style={styles.title} title="Month" id="4">
            <List.Item style={styles.item} title="Item 3" />
        </List.Accordion>
        <List.Accordion style={styles.title} title="Year" id="5">
            <List.Item style={styles.item} title="Item 4" />
        </List.Accordion>
        <List.Accordion style={styles.title} title="All" id="6">
            <List.Item style={styles.item} title="Item 5" />
        </List.Accordion>

    </List.AccordionGroup >
);

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