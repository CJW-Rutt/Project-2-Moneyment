import * as Progress from 'react-native-progress';

export default function HorizontalProgressBar({ progress, color }){

    const barColor = {
        red: 'rgba(212, 86, 46, 1)',
        gray: 'rgba(112, 112, 112, 1)',
    }

    return (
        <Progress.Bar progress={progress} color={barColor[color]} width={285} />
    )
    
}
