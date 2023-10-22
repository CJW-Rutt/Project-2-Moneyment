import { Switch } from 'react-native-paper';
const ToggleSwitch = () => {
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    return <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />;
};

export default Switch;