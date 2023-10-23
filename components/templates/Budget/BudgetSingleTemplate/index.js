import { View, Text, StyleSheet } from "react-native";

import BudgetSingle from "../../../organisms/Budget/BudgetSingle";
import Message from "../../../atoms/Message";

export default function BudgetSingleTemplate() {
    return (
        <View style={{marginTop: 10,}}>
            <Message 
            header='Keep up the good work!' 
            bodyCopy="You've been keeping yourself within your budget" />
            <BudgetSingle />
        </View>
    )
}