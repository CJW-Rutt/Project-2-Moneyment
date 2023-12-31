import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { useState } from 'react';
import Animated, {
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

export default function Segmented({
  arr = [{ title: 'item1', onPress: () => console.log('test1') }, { title: 'item1', onPress: () => console.log('test2') }]
}) {

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
    bgLeft.value = withTiming(index * bgStyle.width, { duration: 150 })
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
                  <Text style={styles.active}>
                    {item.title}
                  </Text> :
                  <Text>
                    {item.title}
                  </Text> :
                item.number === 1 ?
                  !selected ?
                    <Text >
                      {item.title}
                    </Text> :
                    <Text style={styles.active}>
                      {item.title}
                    </Text> : <></>
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
    alignItems: 'center'
  },
  movingBg: {
    position: 'absolute',
    left: 0,
    backgroundColor: '#429488',
    height: '100%',
    borderRadius: 20,
    boxSizing: 'border-box',
    borderWidth: 3,
    borderColor: '#F4F4F4'
  },
  selection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  active: {
    color: 'white',
    fontWeight: 'bold'
  }
})
