import * as Progress from 'react-native-progress';
import { StyleSheet } from 'react-native';

export default function HorizontalProgressBar({ progress }){

    const getBarColor = (progress) => {
        if (progress >= 1) {
          return '#B04121';
        } else if (progress >= 0.7) {
          return '#E58331';
        } else { 
          return '#6AB4AC';
        }
      }

    return (
        <Progress.Bar
            style={styles.progress_bar}
            progress={progress}
            color={getBarColor(progress)}
            width={390}
            height={5}
        />
    )
    
}
const styles = StyleSheet.create({
    progress_bar: {
        borderStyle: 'solid',
        borderRadius: 0,
        margin: -1,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    }
})