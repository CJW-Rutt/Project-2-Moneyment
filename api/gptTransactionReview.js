import axios from "axios";
import { gptTransactionReturnParse } from "../utils/gptTransactionReturnParse";

export const gptTransactionReview = async (question, data, role) => {
    
    const lambdaUrl = 'https://rrlk64nyb6forf6odff5klxque0tbopz.lambda-url.ca-central-1.on.aws/'; 

    try {
        const response = await axios.post(lambdaUrl, {
            role: role,
            question: question,
            data: data,
        });

        //console.log('Response from Lambda:', response.data);

        const assistantMessage = response.data.choices[0].message.content;
        const parsedResults = gptTransactionReturnParse(assistantMessage);

        return parsedResults;

    } catch (error) {
        console.error('Error sending data to Lambda:', error);
        throw error;
    }
};