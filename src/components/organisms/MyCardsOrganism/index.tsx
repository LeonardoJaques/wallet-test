import React, {useEffect, useState} from 'react';
import BackgroundScreenMyCards from '@atoms/backgroundScreenMyCards';
import HeaderMyCards from '@molecules/headerMyCards';
import Card from '@atoms/card';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useAuth} from '@contexts/index';
import {Text} from 'react-native-animatable';
import ButtonWallet from '~/components/atoms/buttonWallet';

export default function Mycards() {
  const {data} = useAuth();
  const [enabled, setEnabled] = useState(false);
  const [showCardA, setShowCardA] = useState(true);
  const [showCardB, setShowCardB] = useState(true);
  const [thirdChoiseCard, setThirdChoiseCard] = useState(false);

  useEffect(() => {
    console.log('data', data.cards[0].cvv);
  }, [data]);

  function handleChoiseCard() {
    switch (thirdChoiseCard) {
      case true:
        setShowCardB(false);
        setShowCardA(true);
        setThirdChoiseCard(false);
        break;
      case false:
        setShowCardA(false);
        setShowCardB(true);
        setThirdChoiseCard(true);
        break;
      default:
        break;
    }
  }
  const {name, number, date} = data?.cards[0];

  return (
    <BackgroundScreenMyCards>
      <HeaderMyCards />
      <View style={styles.containerCards}>
        {showCardA && (
          <View style={styles.firtCard}>
            <Card
              name={name || 'Nome do Titular'}
              numberCard={number || '1234567891234567'}
              validade={date || '12/24'}
              onPressIn={() => setEnabled(!enabled)}
              isBlack={enabled}
            />
          </View>
        )}
        <>
          <View style={styles.lastCard}>
            {showCardB && (
              <Card
                name={name || 'Nome do Titular'}
                numberCard={number || '1234567891234567'}
                validade={date || '12/24'}
                onPressIn={() => setEnabled(!enabled)}
                isBlack={!enabled}
              />
            )}
            {!thirdChoiseCard && (
              <TouchableOpacity onPress={handleChoiseCard}>
                <Text style={styles.textAction}>usar este cartão</Text>
              </TouchableOpacity>
            )}
          </View>
          {thirdChoiseCard && (
            <View
              style={[thirdChoiseCard && styles.positionButton, styles.button]}>
              <ButtonWallet
                title="pagar"
                typeButton="card"
                onPress={() => console.log('pagar')}
              />
            </View>
          )}
          {thirdChoiseCard && (
            <View style={styles.hideCard}>
              <Card
                name={name || 'Nome do Titular'}
                numberCard={number || '1234567891234567'}
                validade={date || '12/24'}
                onPressIn={() => setEnabled(!enabled)}
                isBlack={enabled}
              />
            </View>
          )}
        </>
      </View>
    </BackgroundScreenMyCards>
  );
}

const styles = StyleSheet.create({
  containerCards: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    zIndex: 11,
    marginBottom: 10,
  },
  lastCard: {
    position: 'absolute',
    top: '30%',
    zIndex: 10,
  },
  firtCard: {
    position: 'absolute',
    top: '20%',
    zIndex: 10,
  },
  textAction: {
    color: 'white',
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 20,
  },
  positionButton: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hideCard: {
    position: 'absolute',
    top: '90%',
    zIndex: 10,
    opacity: 0.5,
  },
  button: {position: 'absolute', bottom: '20%'},
});
