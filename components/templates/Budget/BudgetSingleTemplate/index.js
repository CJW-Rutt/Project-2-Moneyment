import { View } from "react-native";

import BudgetSingle from "../../../organisms/Budget/BudgetSingle";
import Message from "../../../atoms/Message";

export default function BudgetSingleTemplate({ budget }) {
    return (
        <View>
            <View style={{marginTop: 10,}}>
                <Message 
                    header='Keep up the good work!' 
                    bodyCopy="You've been keeping within your budget" 
                />
            </View>
            <BudgetSingle budget={budget} />
        </View>
    )
}