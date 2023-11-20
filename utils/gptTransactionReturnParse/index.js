export const gptTransactionReturnParse = (message) => {

    const parsedResults = {};
    const lines = message.split('\n');

    lines.forEach((line) => {
        const [key, value] = line.split(': ');
        parsedResults[key.trim()] = value.trim();
    });

    return {
        totalAmount: parsedResults["Total Price"],
        purchaseType: parsedResults["Type"].split(',')[0].trim(),
        purchasePlace: parsedResults["Place"].split(',')[0].trim(),
    };
};