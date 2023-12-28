import {StyleSheet, Text} from 'react-native';
import React from 'react';
import ButtonWallet from '@atoms/buttonWallet';
import {useNavigation} from '@react-navigation/native';
import CenterContainer from '~/components/atoms/centerContainer';

export default function LandingMolecule() {
  const navigation = useNavigation();
  return (
    <CenterContainer>
      <Text style={styles.title}>Wallet Test</Text>
      <ButtonWallet
        title="meus cartões"
        typeButton="card"
        onPress={() => navigation.navigate('MyCards' as never)}
      />
      <ButtonWallet
        title="cadastrar cartão"
        typeButton="register"
        onPress={() => navigation.navigate('Register' as never)}
      />
    </CenterContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: 'normal',
    color: 'white',
    marginBottom: 20,
  },
});
