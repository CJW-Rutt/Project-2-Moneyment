import { useState, useContext, useEffect } from 'react';
import { BottomNavigation, Text, Image, Badge, Modal } from 'react-native-paper';
import { View, StyleSheet, Pressable } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CommonActions } from '@react-navigation/native';
import { FAB } from 'react-native-paper';
import { SIZES } from '../../../constants';

import Home from '../../../screens/Home';
import Add from '../../../screens/Add';
import Budget from '../../../screens/Budget';
import Settings from '../../../screens/Settings';
import Chat from '../../../screens/Chat';

import { DarkModeContext } from '../../../context/darkMode';
import { useTheme } from 'react-native-paper';

import Icon from 'react-native-vector-icons/FontAwesome5'
import TopHeader from '../TopHeader';
import ChatModal from '../../organisms/ChatModal';

// ComponentDocs(){ return ( https://callstack.github.io/react-native-paper/docs/components/BottomNavigation/ ) } 

// Icon Directory <NOTE: Just remove the FontAwesome5 and start typeing to import various libraries>

export default function NavBar({ signedIn }) {
    const theme = useTheme()
    const { isDarkMode } = useContext(DarkModeContext)

    const [index, setIndex] = useState(0);

    const [showChat, setShowChat] = useState(false)

    const handleOpenChat = () => {
        setShowChat(true)
    }

    const hideChat = () => {
        setShowChat(false)
    }

    const colors = {
        light: {
            activeColor: '#fff',
            inactiveColor: '#707070'
        },
        dark: {
            activeColor: theme.colors.primaryDark,
            inactiveColor: theme.colors.primaryLight
        }
    }

    const darkOverrideColor = colors.dark.inactiveColor

    const lightOverride = { colors: { secondaryContainer: '#000000' } }
    const darkOverride = { colors: { secondaryContainer: darkOverrideColor } }

    const [routes] = useState([
        {
            key: 'home',
            title: 'Transactions',
            focusedIcon: 'wallet',
            unfocusedIcon: 'wallet',
            color: '#707070',
            notif: true
        },
        {
            key: 'add',
            title: 'Add',
            focusedIcon: 'plus',
            unfocusedIcon: 'plus',
            color: '#707070',
            notif: false

        },
        {
            key: 'budget',
            title: 'Budget',
            focusedIcon: 'piggy-bank',
            unfocusedIcon: 'piggy-bank',
            color: '#707070',
            notif: true,
        },
        {
            key: 'settings',
            title: 'Settings',
            focusedIcon: 'cog',
            unfocusedIcon: 'cog',
            color: '#707070',
            notif: false
        }
    ]);

    const renderScene = BottomNavigation.SceneMap({
        home: Home,
        add: Add,
        budget: Budget,
        settings: Settings,
    });

    const renderIcon = ({ route, focused }) => {
        return (
            <>
                {
                    isDarkMode
                        ? <Icon
                            name={focused ? route.focusedIcon : route.unfocusedIcon}
                            routeName={route.key}
                            size={20}
                            color={focused ? colors.dark.activeColor : colors.dark.inactiveColor}
                        />
                        :
                        <Icon
                            name={focused ? route.focusedIcon : route.unfocusedIcon}
                            routeName={route.key}
                            size={20}
                            color={focused ? colors.light.activeColor : colors.light.inactiveColor}
                        />
                }
                {/* {
                    route.notif === true ? <Badge size={10} style={{ position: 'absolute', top: -5, right: -10 }}></Badge> : <></>
                } */}
            </>
        );
    };

    const CustomTabBarLabel = ({ route, focused, color }) => (
        <Text
            style={{
                width: '100%',
                textAlign: 'center',
                fontSize: 12,
                color: focused ? color : '#707070',
                fontWeight: focused ? 'bold' : 'normal'
            }}
        >
            {route.title}
        </Text>
    );

    return (
        <>

            <BottomNavigation
                navigationState={{ index, routes }}
                onIndexChange={setIndex}
                renderScene={renderScene}
                renderIcon={renderIcon}
                barStyle={isDarkMode
                    ? {
                        borderTopLeftRadius: 20, borderTopRightRadius: 20, backgroundColor: theme.colors.secondaryDark, position: 'absolute',
                        overflow: 'hidden'
                    }
                    : {
                        backgroundColor: '#F4F4F4', borderTopLeftRadius: 20, borderTopRightRadius: 20, position: 'absolute',
                        overflow: 'hidden'
                    }}
                keyboardHidesNavigationBar={true}
                theme={isDarkMode ? darkOverride : lightOverride}
                renderLabel={CustomTabBarLabel}
            />
            {
                showChat
                    ? <>
                        <ChatModal show={showChat} func={hideChat} />
                    </>
                    : <>
                        <FAB
                            icon="chat"
                            style={[styles.fab, { bottom: SIZES.height * 0.1 }]}
                            color='white'
                            onPress={() => {
                                handleOpenChat()
                                console.log('Show chat', showChat)
                            }}
                        />
                    </>
            }
        </>

    );
}

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        // bottom: 110,
        zIndex: 3,
        backgroundColor: '#429488'
        // opacity: 0.3
    },
    chatContainer: {
        // zIndex: 5,
        position: 'absolute',
        top: 0
    }
})