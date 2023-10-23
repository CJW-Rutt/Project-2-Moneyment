import { useState }  from 'react';
import { BottomNavigation, Text, Image } from 'react-native-paper';

import Home from '../../../screens/Home';
import Add from '../../../screens/Add';
import Budget from '../../../screens/Budget';
import Header from '../Header';

import Icon from 'react-native-vector-icons/FontAwesome5'

// ComponentDocs(){ return ( https://callstack.github.io/react-native-paper/docs/components/BottomNavigation/ ) } 

// Icon Directory <NOTE: Just remove the FontAwesome5 and start typeing to import various libraries>

export default function NavBar() {

    const [index, setIndex] = useState(0);

    const activeColor = '#000';
    const inactiveColor = '#707070';

    const [routes] = useState([
        { 
            key: 'home', 
            title: 'Wallet', 
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
    ]);

    const renderScene = BottomNavigation.SceneMap({
        home: Home,
        add: Add,
        budget: Budget,
    });

    const renderIcon = ({ route, focused }) => {
        return (
          <Icon
            name={focused ? route.focusedIcon : route.unfocusedIcon}
            routeName={route.key}
            size={20}
            color={focused ? activeColor: inactiveColor}
          />
        );
    };

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
            renderIcon={renderIcon}
            barStyle={{ backgroundColor: '#F4F4F4', borderTopLeftRadius: 20, borderTopRightRadius: 20, }}
            keyboardHidesNavigationBar={true}
        />
    );
}