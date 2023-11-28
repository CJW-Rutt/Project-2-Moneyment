import axios from "axios";
import { gptTransactionReturnParse } from "../utils/gptTransactionReturnParse";

// when called with gptTransactionReview(question, data, role, false) will return raw response for chat

export const gptTransactionReview = async (question, data, role, shouldParse = true) => {
    const lambdaUrl = 'https://rrlk64nyb6forf6odff5klxque0tbopz.lambda-url.ca-central-1.on.aws/'; 

    try {
        const response = await axios.post(lambdaUrl, {
            role: role,
            question: question,
            data: data,
        });

        console.log('Response from Lambda:', response.data);

        if (shouldParse) {
            const assistantMessage = response.data.choices[0].message.content;
            return gptTransactionReturnParse(assistantMessage);
        } else {
            return response.data;
        }

    } catch (error) {
        console.error('Error sending data to Lambda:', error);
        throw error;
    }
};