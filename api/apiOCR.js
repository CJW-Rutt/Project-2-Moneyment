import axios from 'axios';

const OCR_API_KEY = process.env.EXPO_PUBLIC_OCR_KEY;

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
    formData.append('apikey', OCR_API_KEY);
    formData.append('isOverlayRequired', true);

    try {
        const response = await ocrApiClient.post('/parse/image', formData);
        return response.data;
    } catch (error) {
        throw error;
    }
};
