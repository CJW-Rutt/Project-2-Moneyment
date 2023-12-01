import React, { useState, useCallback, useEffect, useContext } from 'react';
import { View, KeyboardAvoidingView, Platform, Keyboard, Text, StyleSheet } from 'react-native';
import { GiftedChat, InputToolbar, Send, Bubble } from 'react-native-gifted-chat';
import { gptTransactionReview } from '../api/gptTransactionReview';
import { SIZES } from '../constants'
import { TouchableWithoutFeedback } from 'react-native';
import { TextInput } from 'react-native-paper';
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
                            // borderColor: '#707070',
                            // borderWidth: 1,
                            // borderRadius: 5,
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
        const role = 'Your role here';

        gptTransactionReview(question, userMessage, role, false)
            .then(setIsTyping(true))
            .then(gptResponse => {
                console.log('Received RESPONSE: ', gptResponse);
                setIsTyping(false)

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
        <TouchableWithoutFeedback onPress={closeKeyboard}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0} // Adjust if necessary
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