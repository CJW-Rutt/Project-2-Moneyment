import { View, Text } from 'react-native';
import { List } from 'react-native-paper';

const BudgetDropdown = () => (
    <List.AccordionGroup>
        <List.Accordion title="Day" id="1">
            <List.Item title="Item 1" />
        </List.Accordion>
        <List.Accordion title="Week" id="2">
            <List.Item title="Item 2" />
        </List.Accordion>
        <List.Accordion title="Month" id="3">
            <List.Item title="Item 3" />
        </List.Accordion>
        <List.Accordion title="Year" id="4">
            <List.Item title="Item 4" />
        </List.Accordion>
        <List.Accordion title="Month" id="5">
            <List.Item title="Item 5" />
        </List.Accordion>

    </List.AccordionGroup>
);

export default BudgetDropdown;