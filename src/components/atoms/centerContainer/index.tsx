import {StyleSheet, View} from 'react-native';
import React, {ReactNode} from 'react';

export default function CenterContainer({children}: {children: ReactNode}) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
