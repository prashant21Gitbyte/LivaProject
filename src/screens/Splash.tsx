import React, {useEffect, useRef} from 'react';
import {View, Image, StyleSheet, Animated, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const SplashScreen = () => {
  const navigation = useNavigation();
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const logoRotation = useRef(new Animated.Value(0)).current;
  const logoTranslateX = useRef(new Animated.Value(0)).current;
  const brandTranslateX = useRef(new Animated.Value(0)).current;
  const brandOpacity = useRef(new Animated.Value(0)).current;
  const leavesOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.sequence([
      Animated.parallel([
        Animated.timing(logoOpacity, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(logoRotation, {
          toValue: 360,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),

      Animated.parallel([
        Animated.timing(logoTranslateX, {
          toValue: -55,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(brandOpacity, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(brandTranslateX, {
          toValue: 40,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(leavesOpacity, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ]);

    animation.start(() => {
      navigation.navigate('Login');
    });
  }, [
    logoOpacity,
    logoRotation,
    logoTranslateX,
    brandOpacity,
    brandTranslateX,
    leavesOpacity,
  ]);

  const logoStyle = {
    opacity: logoOpacity,
    transform: [
      {
        rotate: logoRotation.interpolate({
          inputRange: [0, 360],
          outputRange: ['0deg', '360deg'],
        }),
      },
      {translateX: logoTranslateX},
    ],
  };

  const brandStyle = {
    opacity: brandOpacity,
    transform: [{translateX: brandTranslateX}],
  };

  const leavesStyle = {
    opacity: leavesOpacity,
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.logoContainer, logoStyle]}>
        <Image
          source={require('../assets/images/BrandLogo.png')}
          style={styles.logo}
        />
      </Animated.View>
      <Animated.View style={[styles.brandContainer, brandStyle]}>
        <Image
          source={require('../assets/images/BrandText.png')}
          style={styles.brand}
        />
      </Animated.View>

      <Animated.View style={[styles.upperLeavesContainer, leavesStyle]}>
        <Image
          source={require('../assets/images/upperLeaves.png')}
          style={styles.leaves}
        />
      </Animated.View>

      <Animated.View style={[styles.lowerLeavesContainer, leavesStyle]}>
        <Image
          source={require('../assets/images/lowerLeaves.png')}
          style={styles.leaves}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2D949F',
    paddingBottom: 20,
  },
  logoContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    backgroundColor: '#2D949F',
    width: 70,
    height: 70,
  },
  brandContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brand: {
    width: 100,
    height: 50,
  },
  upperLeavesContainer: {
    //backgroundColor: 'yellow',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  lowerLeavesContainer: {
    //backgroundColor: 'gray',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  leaves: {
    width: 200,
    height: 200,
  },
});

export default SplashScreen;
