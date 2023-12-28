import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors} from '@colors/index';

export default function backgroundScreenMyCards({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return <View style={styles.container}>{children}</View>;
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
});
