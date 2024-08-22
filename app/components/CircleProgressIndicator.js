// CircleProgressIndicator.js

import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
import Svg, {Circle} from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const CircleProgressIndicator = ({isVisible}) => {
  const animatedValue = new Animated.Value(0);

  useEffect(() => {
    if (isVisible) {
      Animated.loop(
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ).start();
    } else {
      animatedValue.stopAnimation();
    }
  }, [isVisible]);

  const animatedStrokeDashoffset = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 628],
  });

  if (!isVisible) return null;

  return (
    <View style={styles.overlay}>
      <Svg height="50" width="50" viewBox="0 0 100 100">
        <Circle
          cx="50"
          cy="50"
          r="45"
          stroke="#009F89"
          strokeWidth="5"
          fill="none"
          strokeOpacity="0.2"
        />
        <AnimatedCircle
          cx="50"
          cy="50"
          r="45"
          stroke="#009F89"
          strokeWidth="5"
          fill="none"
          strokeDasharray="282"
          strokeDashoffset={animatedStrokeDashoffset}
        />
      </Svg>
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 20,
    color: '#009F89',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CircleProgressIndicator;
