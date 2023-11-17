import { useState, useContext } from 'react';
import { BottomNavigation, Text, Image } from 'react-native-paper';

import Home from '../../../screens/Home';
import Add from '../../../screens/Add';
import Budget from '../../../screens/Budget';
import Header from '../Header';
import Settings from '../../../screens/Settings';
import { DarkModeContext } from '../../../context/darkMode';
import { useTheme } from 'react-native-paper';

import Icon from 'react-native-vector-icons/FontAwesome5'

// ComponentDocs(){ return ( https://callstack.github.io/react-native-paper/docs/components/BottomNavigation/ ) } 

// Icon Directory <NOTE: Just remove the FontAwesome5 and start typeing to import various libraries>

export default function NavBar() {
    const theme = useTheme()
    const { isDarkMode } = useContext(DarkModeContext)

    const [index, setIndex] = useState(0);

    const colors = {
        light: {
            activeColor: '#000',
            inactiveColor: '#707070'
        },
        dark: {
            activeColor: theme.colors.primaryDark,
            inactiveColor: theme.colors.primaryLight
        }
    }

    const [routes] = useState([
        {
            key: 'home',
            title: 'Transactions',
            focusedIcon: 'wallet',
            unfocusedIcon: 'wallet',
            color: '#707070'
        },
        {
            key: 'add',
            title: 'Add',
            focusedIcon: 'plus',
            unfocusedIcon: 'plus-circle',
            color: '#707070'
        },
        {
            key: 'budget',
            title: 'Budget',
            focusedIcon: 'piggy-bank',
            unfocusedIcon: 'piggy-bank',
            color: '#707070'
        },
        {
            key: 'settings',
            title: 'Settings',
            focusedIcon: 'cog',
            unfocusedIcon: 'cog',
            color: '#707070'
        },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        home: Home,
        add: Add,
        budget: Budget,
        settings: Settings
    });

    const renderIcon = ({ route, focused }) => {
        return (
            <>
                {isDarkMode
                    ? <Icon
                        name={focused ? route.focusedIcon : route.unfocusedIcon}
                        routeName={route.key}
                        size={20}
                        color={focused ? colors.dark.activeColor : colors.dark.inactiveColor}
                    />
                    : <Icon
                        name={focused ? route.focusedIcon : route.unfocusedIcon}
                        routeName={route.key}
                        size={20}
                        color={focused ? colors.light.activeColor : colors.light.inactiveColor}
                    />}
            </>
        );
    };

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
            renderIcon={renderIcon}
            barStyle={isDarkMode ? { borderTopLeftRadius: 20, borderTopRightRadius: 20, backgroundColor: theme.colors.secondaryDark } : { backgroundColor: '#F4F4F4', borderTopLeftRadius: 20, borderTopRightRadius: 20, }}
            keyboardHidesNavigationBar={true}
        />
    );
}