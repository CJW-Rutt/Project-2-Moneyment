import React, { useState, useCallback, useEffect } from 'react';
import { View, KeyboardAvoidingView, Platform, Keyboard  } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { gptTransactionReview } from '../api/gptTransactionReview';
import { SIZES } from '../constants'

export default function Chat() {
    const [messages, setMessages] = useState([]);
    const [keyboardHeight, setKeyboardHeight] = useState(0);

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello! How can I assist you today?',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'GPT Assistant',
                    avatar: '',
                },
            },
        ]);
        const showSubscription = Keyboard.addListener("keyboardDidShow", (e) => {
            setKeyboardHeight(e.endCoordinates.height - 340);
        });
        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
            setKeyboardHeight(0);
        });

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
        const userMessage = messages[0].text;
    
        const question = 'Your question here';
        const role = 'Your role here';
    
        gptTransactionReview(question, userMessage, role, false).then(gptResponse => {
            console.log('Received RESPONSE: ', gptResponse);
    
            // Extracting the text from the response's 'content' field
            const responseText = gptResponse.choices && gptResponse.choices[0].message && gptResponse.choices[0].message.content 
                                 ? gptResponse.choices[0].message.content 
                                 : 'Response not available.';
            
            setMessages(previousMessages => GiftedChat.append(previousMessages, [{
                _id: Math.round(Math.random() * 1000000),
                text: responseText, 
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'GPT Assistant',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            }]));
        }).catch(error => {
            console.error('Error processing GPT response:', error);
        });
    }, []);
    
    
    

    return (
        <KeyboardAvoidingView 
            style={{ flex: 1 }} 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0} // Adjust if necessary
        >
            <View style={{ flex: 1, marginBottom: 80 }}>
                <View style={{ flex: 1, marginBottom: keyboardHeight }}>
                    <GiftedChat
                        messages={messages}
                        onSend={messages => onSend(messages)}
                        user={{ _id: 1 }}
                    />
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}
