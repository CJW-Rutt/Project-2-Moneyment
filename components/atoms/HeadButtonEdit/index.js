import { Button } from 'react-native-paper';

export default function HeadButtonEdit() {
    return(
        <Button theme={{ colors: { primary: 'red' } }} icon="pencil" mode="outlined" onPress={() => console.log('Pressed')}>
            Edit
        </Button>
    );
}