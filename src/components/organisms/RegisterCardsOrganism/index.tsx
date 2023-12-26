import React, {useState} from 'react';
import BackgroundScreen from '~/components/atoms/backgroundScreen';
import {StyleSheet, Text, View} from 'react-native';
import CenterContainer from '~/components/atoms/centerContainer';
import ButtonWallet from '@atoms/buttonWallet';
import {useNavigation} from '@react-navigation/native';
import InputText from '~/components/atoms/inputText';
import Header from '@atoms/header';

const enum TypeInput {
  cardNumber = 'número do cartão',
  cardHolderName = 'nome do titular do cartão',
  validade = 'vencimento',
  codigoSeguranca = 'código de segurança',
}

const enum TypeMask {
  cardNumber = '9999 9999 9999 9999',
  validade = '99/99',
  codigoSeguranca = '999',
}
export default function RegisterCardsOrganism() {
  const navigation = useNavigation();
  const [cardNumber, setCardNumber] = useState('');
  const [validade, setValidade] = useState('');
  const [codigoSeguranca, setCodigoSeguranca] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');

  return (
    <BackgroundScreen>
      <Header title="Cadastro" />
      <CenterContainer>
        <Text style={styles.title}>Wallet Test</Text>
        <InputText
          input={TypeInput.cardNumber}
          onChangeText={setCardNumber}
          value={cardNumber}
          icon
          iconName="camera-outline"
          iconPosition="right"
          clickableIcon={() => {}}
          style={styles.input}
          mask={TypeMask.cardNumber}
        />
        <InputText
          input={TypeInput.cardHolderName}
          onChangeText={setCardHolderName}
          value={cardHolderName}
          style={styles.input}
        />
        <View style={styles.row}>
          <InputText
            input={TypeInput.validade}
            onChangeText={text => {
              setValidade(text);
            }}
            value={validade}
            style={styles.column}
            mask={TypeMask.validade}
            placeholder="MM/AA"
          />
          <InputText
            input={TypeInput.codigoSeguranca}
            onChangeText={text => {
              setCodigoSeguranca(text);
            }}
            value={codigoSeguranca}
            style={styles.column}
            mask={TypeMask.codigoSeguranca}
            placeholder="***"
            secureTextEntry
          />
        </View>
        <ButtonWallet
          onPress={() => {
            navigation.navigate('MyCards' as never);
          }}
          title="avancar"
          typeButton="card"
          disabled
        />
      </CenterContainer>
    </BackgroundScreen>
  );
}
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    width: '80%',
    paddingHorizontal: '16.5%',
    gap: 20,
    marginTop: 20,
  },
  column: {
    flexDirection: 'column',
    flexWrap: 'nowrap',
  },
  title: {
    color: 'white',
    fontSize: 30,
    marginBottom: 20,
    letterSpacing: 1,
  },
  input: {
    marginTop: 12,
  },
});
