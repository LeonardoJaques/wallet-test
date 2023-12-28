import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors} from '@colors/index';
import elementUp from '@images/backgroundelementBigUp.png';
import elementDown from '@images/backgroundelementBigDown.png';
import * as Animatable from 'react-native-animatable';

export default function AnimatedScreen({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Animatable.Image
        animation="slideInDown"
        duration={2000}
        source={elementUp}
        style={styles.elementTop}
      />
      <Animatable.View
        animation="fadeInUp"
        duration={1000}
        style={styles.animatedView}>
        {children}
      </Animatable.View>
      <Animatable.Image
        animation="slideInUp"
        duration={2000}
        source={elementDown}
        style={styles.elementBottom}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.default,
  },
  elementTop: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  elementBottom: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  animatedView: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
