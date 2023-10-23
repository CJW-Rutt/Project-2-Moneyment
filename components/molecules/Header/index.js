import { Appbar } from 'react-native-paper';


export default function Header() {

  return (
    <Appbar.Header mode='center-aligned' style={{backgroundColor: '#ffffff', borderBottomWidth: 1, borderBottomColor: '#A9A9A9',}}>
        <Appbar.Content title='Moneyment' />
    </Appbar.Header>
  );
};