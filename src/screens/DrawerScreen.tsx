import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import BottomDrawer, {
  BottomDrawerMethods,
} from 'react-native-animated-bottom-drawer';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import StatusIndicator from '../components/StatusIndicatorAccountDetails';

const App = () => {
  // ref
  const bottomDrawerRef = useRef<BottomDrawerMethods>(null);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const animation = useRef(new Animated.Value(0)).current;
  const handlePressIn = () => {
    Animated.timing(animation, {
      toValue: 40,
      duration: 100,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      bottomDrawerRef.current.open();
    }, 200);
  };

  const handlePressOut = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };
  return (
    <GestureHandlerRootView>
      <SafeAreaView style={styles.container}>
        {/*<Button title="Open" onPress={() => bottomDrawerRef.current.open()} />*/}
        <View
          style={{
            bottom: 0,
            position: 'relative',
            backgroundColor: 'yellow',
          }}>
          {/*
        <TouchableOpacity onPressIn={() => bottomDrawerRef.current.open()}>
        <View style={{width: '100%', height: 200, backgroundColor: 'white', position: 'absolute', top: 650, elevation: 20}}>
          <View style={{width: 40, alignSelf: 'center', backgroundColor: 'gray', height: 5, marginTop:20}}></View>
        </View>
        </TouchableOpacity>
        */}

          <TouchableWithoutFeedback
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}>
            <Animated.View
              style={[
                styles.animatedView,
                {transform: [{translateY: animation}]},
              ]}>
              <View style={styles.innerView}>
                <View style={styles.handle}></View>
              </View>
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>

        <BottomDrawer
          enableSnapping={true}
          overDrag={true}
          snapPoints={[300, 500, 700]}
          ref={bottomDrawerRef}>
          <View style={styles.contentContainer}>
            <StatusIndicator />
          </View>
        </BottomDrawer>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //padding: 24,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  animatedView: {
    width: '100%',
    height: 200,
    backgroundColor: 'white',
    borderRadius: 25,
    position: 'absolute',
    bottom: -390,
    elevation: 20,
    alignItems: 'center',
  },
  innerView: {
    /*
    backgroundColor: 'red',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    */
  },
  handle: {
    //width: 40,

    backgroundColor: 'gray',
    height: 5,
    marginTop: 20,
  },
});

export default App;
