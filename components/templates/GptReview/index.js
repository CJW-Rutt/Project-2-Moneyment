import { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import AddTransactionForm from '../AddTransactionForm';

const apiKey = process.env.EXPO_PUBLIC_OPENAI_KEY;

export default function GptReview({ data }) {

	const [reviewResults, setReviewResults] = useState({
		totalAmount: '',
		purchaseType: '',
		purchasePlace: ''
	});

	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (data) { 
			makeOpenAIRequest();
		}
	}, [data]);

	const makeOpenAIRequest = async () => {

		setIsLoading(true);

		const requestData = {

			model: "gpt-3.5-turbo",
			messages: [
				{
					role: "system",
					content: `You are provided with receipt data. Analyze it and extract and return Total Price:, Type:, and Place:. Type is the type of item strictly done with two words or less. Place is the type of store strictly done with two words or less. So if Vape Batteries are bought, Vape Store is the place. The response for each category CANNOT be more then 2 words. Just choose.`,
				},
				{
					role: "user",
					content: data,
				},
			]
		}

		const apiUrl = "https://api.openai.com/v1/chat/completions";

		let response; 

		try {

			response = await fetch(apiUrl, {
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

			console.log('Parsed Results:', parsedResults);

            if (Object.keys(parsedResults).length > 0) {
                setReviewResults({
                    totalAmount: parsedResults["Total Price"],
                    purchaseType: parsedResults["Type"].split(',')[0].trim(),
                    purchasePlace: parsedResults["Place"].split(',')[0].trim(),
                });
            }
        
            setIsLoading(false);
		} 
		catch (error) {
			setIsLoading(false);
			console.error("Error making OpenAi API request", error);
		}

	};

	return (
		<View>

			{isLoading ? (
				<Text>Beep Boop Reviewing Results</Text>
			) : (
				<>
					<AddTransactionForm initialValues={reviewResults} />
				</>
			)}
            
    	</View>
	);
}


