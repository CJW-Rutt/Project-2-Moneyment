import axios from 'axios';
import { retreiveOcrKey } from './retreiveOcrKey';

const OCR_API_KEY = retreiveOcrKey();

const ocrApiClient = axios.create({
    baseURL: 'https://apipro2.ocr.space',
});

export const processOCR = async (imageUri) => {
    const formData = new FormData();
    formData.append('file', {
        uri: imageUri,
        name: 'image.jpg',
        type: 'image/jpg',
    });
    formData.append('language', 'eng');
    formData.append('apikey', OCR_API_KEY._j);
    formData.append('isOverlayRequired', true);

    try {
        const response = await ocrApiClient.post('/parse/image', formData);
        return response.data;
    } catch (error) {
        throw error;
    }
};
