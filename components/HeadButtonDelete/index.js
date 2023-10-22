import { Button } from 'react-native-paper';
import { Iconify } from 'react-native-iconify';
import { StyleSheet } from 'react-native';

const HeadButtonDelete = () => (
    <Button theme={{ colors: { primary: 'black' } }} icon={"mdi:trash"} mode="outlined" onPress={() => console.log('Pressed')}>
        Delete
    </Button >
);

export default HeadButtonDelete;


