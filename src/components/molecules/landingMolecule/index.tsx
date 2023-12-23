import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ButtonWallet from '@atoms/buttonWallet';
import {useNavigation} from '@react-navigation/native';

export default function LandingMolecule() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wallet Test</Text>
      <ButtonWallet
        title="meus cartões"
        typeButton="card"
        onPress={() => console.log('test')}
      />
      <ButtonWallet
        title="cadastrar cartão"
        typeButton="register"
        onPress={() => navigation.navigate('Register' as never)}
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
