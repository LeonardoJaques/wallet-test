import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ButtonWallet from '@atoms/buttonWallet';
export default function LandingMolecule() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wallet Test</Text>
      <ButtonWallet
        title="meus cartões"
        typeButton="register"
        onPress={() => console.log('test')}
      />
      <ButtonWallet
        title="cadastrar cartão"
        typeButton="card"
        onPress={() => console.log('test')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 40,
    fontWeight: 'normal',
    color: 'white',
    marginBottom: 20,
  },
});
