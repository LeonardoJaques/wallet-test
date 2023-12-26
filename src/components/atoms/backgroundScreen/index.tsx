import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {colors} from '@colors/index';
import element from '@images/element.png';

export default function BackgroundScreen({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Image source={element} style={styles.elementTop} />
      {children}
      <Image source={element} style={styles.elementBottom} />
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
    transform: [{rotate: '180deg'}],
  },
});
