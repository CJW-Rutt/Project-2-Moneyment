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
        <View>
            <Text>
                List.Accordion can be wrapped because implementation uses React.Context.
            </Text>
            <List.Accordion title="I" id="3">
                <List.Item title="Item 3" />
            </List.Accordion>
        </View>
    </List.AccordionGroup>
);

export default BudgetDropdown;