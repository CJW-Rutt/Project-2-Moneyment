import SegmentedControl from '@react-native-segmented-control/segmented-control';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import { Image } from 'expo-image'
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated'

export default function LightDarkSegment({ arr }) {

  const bgLeft = useSharedValue(0)

  const segStyle = {
    width: 350
  }

  const bgStyle = {
    width: segStyle.width / arr.length,
    left: bgLeft
  }

  const [selected, setSelected] = useState(false);

  const handlePress = (index, func) => {
    func()
    bgLeft.value !== 0 ? (
      bgLeft.value = withTiming(0 * bgStyle.width, { duration: 150 })
    ) :
      (
        bgLeft.value = withTiming(1 * bgStyle.width, { duration: 150 })
      )
    setSelected(!selected)
  }

  return (

    <View style={[styles.container, segStyle]}>
      <Animated.View style={[styles.movingBg, bgStyle]}></Animated.View>
      {
        arr.map((item, index) => {
          return (
            <TouchableOpacity style={styles.selection} key={index} onPress={() => {
              handlePress(index, item.onPress)
            }}>
              {item.number === 0 ?
                !selected ?
                  <View style={styles.buttonContainer}>
                    <Image source={require('../../../assets/icons/setting/light.png')} style={{ width: 20, height: 20 }} />
                    <Text style={styles.active}>
                      {item.title}
                    </Text>
                  </View> :
                  <View style={styles.buttonContainer}>
                    <Image source={require('../../../assets/icons/setting/light_reverse.png')} style={{ width: 20, height: 20 }} />
                    <Text >
                      {item.title}
                    </Text>
                  </View> :
                item.number === 1 ?
                  !selected ?
                    <View style={styles.buttonContainer}>
                      <Image source={require('../../../assets/icons/setting/dark_reverse.png')} style={{ width: 20, height: 20 }} />
                      <Text >
                        {item.title}
                      </Text>
                    </View> : <View style={styles.buttonContainer}>
                      <Image source={require('../../../assets/icons/setting/dark.png')} style={{ width: 20, height: 20 }} />
                      <Text >
                        {item.title}
                      </Text>
                    </View> : <></>
              }
            </TouchableOpacity>
          )
        })
      }

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#F4F4F4',
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  movingBg: {
    position: 'absolute',
    left: 0,
    backgroundColor: '#6AB4AC',
    height: '100%',
    borderRadius: 20,
    boxSizing: 'border-box',
    borderWidth: 3,
    borderColor: '#F4F4F4'
  },
  selection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  active: {
    color: 'white',
    fontWeight: 'bold',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 5
  },
})