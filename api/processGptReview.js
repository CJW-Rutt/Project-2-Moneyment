const apiKey = process.env.EXPO_PUBLIC_OPENAI_KEY;

export const processGptReview = async (ocrParsedResult) => {
    if (!ocrParsedResult) {
        return null;
    }

    const requestData = {
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system",
                content: `You are provided with receipt data. Analyze it and extract and return Total Price:, Type:, and Place:. Type is the type of item strictly done with two words or less. Place is the type of store strictly done with two words or less. So if Vape Batteries are bought, Vape Store is the place. The response for each category CANNOT be more then 2 words. Just choose.`,
            },
            {
                role: "user",
                content: ocrParsedResult,
            },
        ],
    };

    const apiUrl = "https://api.openai.com/v1/chat/completions";

    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apiKey}`,   
            },
            body: JSON.stringify(requestData),
        });

        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        const assistantMessage = responseData.choices[0].message.content;

        const parsedResults = {};
        const lines = assistantMessage.split('\n');

        lines.forEach((line) => {
            const [key, value] = line.split(': ');
            parsedResults[key] = value;
        });

        return {
            totalAmount: parsedResults["Total Price"],
            purchaseType: parsedResults["Type"].split(',')[0].trim(),
            purchasePlace: parsedResults["Place"].split(',')[0].trim(),
        };
    } catch (error) {
        console.error("Error making OpenAi API request", error);
        return null;
    }
};
