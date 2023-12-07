import React, { useState, useCallback, useEffect, useContext } from 'react';
import { View, KeyboardAvoidingView, Platform, Keyboard, StyleSheet } from 'react-native';
import { GiftedChat, InputToolbar, Send, Bubble } from 'react-native-gifted-chat';
import { gptTransactionReview } from '../api/gptTransactionReview';
import { SIZES } from '../constants'
import { TouchableWithoutFeedback } from 'react-native';
import IconContainer from '../components/atoms/IconContainer';
import { DarkModeContext } from '../context/darkMode';

export default function Chat() {
    const [messages, setMessages] = useState([]);
    const [keyboardHeight, setKeyboardHeight] = useState(0);
    const [isTyping, setIsTyping] = useState(false)
    const { isDarkMode } = useContext(DarkModeContext)

    const closeKeyboard = () => {
        Keyboard.dismiss()
    }

    const renderInputToolBar = (props) => {
        return (
            <View style={styles.container}>
                <InputToolbar {...props}
                    containerStyle={[styles.inputContainer,
                    isDarkMode
                        ? {
                            width: SIZES.width - 30,
                            left: 15,
                            marginBottom: -100,
                            backgroundColor: 'black'
                        }
                        : {
                            width: SIZES.width - 30,
                            left: 15,
                            marginBottom: -100,
                        }
                    ]}
                    textInputStyle={
                        isDarkMode
                            ? { fontSize: 12, color: 'white' }
                            : { fontSize: 12 }
                    } >
                </InputToolbar>
            </View>
        )
    }

    const renderSend = (props) => {
        return (
            <Send {...props} containerStyle={styles.sendIcon}>
                <View>
                    <IconContainer icon='send' />
                </View>
            </Send>
        )
    }

    const renderBubble = (props) => {
        return (
            <Bubble {...props}
                wrapperStyle={isDarkMode ? {
                    right: {
                        backgroundColor: '#429488',
                        padding: 10,
                        paddingRight: 20,
                        borderRadius: 5,
                    },
                    left: {
                        backgroundColor: 'black',
                        padding: 10,
                        paddingLeft: 20,
                        borderRadius: 5,
                        borderColor: '#429488',
                        borderWidth: 1
                    },
                }
                    : {
                        right: {
                            backgroundColor: '#429488',
                            padding: 10,
                            paddingRight: 20,
                            borderRadius: 5,
                        },
                        left: {
                            backgroundColor: 'white',
                            padding: 10,
                            paddingLeft: 20,
                            borderRadius: 5,
                            borderColor: '#429488',
                            borderWidth: 1
                        },
                    }
                }
                textStyle={
                    isDarkMode
                        ? {
                            right: {
                                fontSize: 12
                            },
                            left: {
                                fontSize: 12,
                                color: 'white'
                            }
                        }
                        : {
                            right: {
                                fontSize: 12
                            },
                            left: {
                                fontSize: 12
                            }
                        }
                }
            />
        )
    }

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
        const role = "You are a budgeting specialist and helper. You must only answer questions related to finance, budgeting, and money. Please gently remind the user if they try to ask about topics that arent finance, budgeting or money. If the user asks for advice or suggestions, you MUST remind them at the end of your response: I am not a financial advisor, if you requrie financial advice, seek a professional. If you are asked anything regarding a weekend trip to Victoria, reply with 'I've noticed you've been doing great with staying within your budgets! Based on your average spending habits, and your current budgeting, I would suggest that you allocate a minimum of $400 for a weekend trip to Victoria, BC for a low-budget trip.' followed by a line break and then say something about how the cost depends on factors like accomodations and activities, followed by a line break and end with the information that you are not a financial advisor. All with line breaks after end of sentences.";

        gptTransactionReview(question, userMessage, role, false)
            .then(setIsTyping(true))
            .then(gptResponse => {
                setIsTyping(false)

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
        <TouchableWithoutFeedback onPress={closeKeyboard}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
            >
                <View style={{ flex: 1, marginBottom: 80 }}>
                    <View style={{
                        flex: 1,
                    }}>
                        <GiftedChat
                            messages={messages}
                            onSend={messages => onSend(messages)}
                            user={{ _id: 1 }}
                            renderInputToolbar={renderInputToolBar}
                            renderSend={renderSend}
                            renderBubble={renderBubble}
                            placeholder='Ask me about finance'
                            alwaysShowSend={true}
                            alignTop={true}
                            renderAvatar={() => null}
                            isKeyboardInternallyHandled={false}
                            isTyping={isTyping}
                            containerStyle={{ backgroundColor: 'blue' }}
                        />
                    </View>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        height: 'auto',
        width: 100,
    },
    sendIcon: {
        width: "auto",
        height: "auto"
    },
    chatContainer: {
        marginBottom: 10
    }
})