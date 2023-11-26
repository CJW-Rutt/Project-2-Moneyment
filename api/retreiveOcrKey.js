import axios from "axios";

export const retreiveOcrKey = async () => {
    const keyUrl = 'https://m74o5svuqessd4mgx56mmgqi440jhkgt.lambda-url.ca-central-1.on.aws/'; 

    try {
        const response = await axios.post(keyUrl);
        return response.data;
    } catch (error) {
        console.error('OCR KEY: Error sending data to Lambda:', error);
        throw error;
    }
};