import { Appbar } from 'react-native-paper';


export default function Header( displayBack ) {
  const goBack = () => console.log('Went back'); // need to be configured

  const handleSearch = () => console.log('Searching');

  const handleMore = () => console.log('Shown more');

  //const handleMore = () => console.log('Shown more'); prob dont need

  return (
    <Appbar.Header mode='center-aligned'>
        <Appbar.BackAction onPress={goBack} />
        <Appbar.Content title="Title" />
        <Appbar.Action icon="magnify" onPress={handleSearch} />
        <Appbar.Action icon="dots-vertical" onPress={handleMore} />
    </Appbar.Header>
    // <Appbar.Header mode={!displayBack ? 'center-aligned' : 'small'}>
    //     { 
    //         !displayBack ? 
    //             <Appbar.BackAction onPress={goBack} /> 
    //             : <></>
    //     }
    //   <Appbar.Content title="Title" />
    //     {/*
    //         displayMore ? 
    //             <Appbar.Action icon="dots-vertical" onPress={handleMore} /> 
    //             : <></> // !! This is not functional and seemingly unnessary but leave it in case we need it.
    //     */}
    // </Appbar.Header>
  );
};