import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const HeadButtonEdit = () => (
    <Button theme={{ colors: { primary: 'red' } }} icon="pencil" mode="outlined" onPress={() => console.log('Pressed')}>
        Edit
    </Button>
);

export default HeadButtonEdit;