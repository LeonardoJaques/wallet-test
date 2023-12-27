import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '~/assets/colors';
import {TypeCard} from '@enums/index';

interface CardProps {
  name: string;
  numberCard: string;
  validade: string;
  isBlack?: boolean;
}

export default function Card({name, numberCard, validade, isBlack}: CardProps) {
  const colorText = isBlack ? colors.white : colors.blackCard;
  const typeCard = isBlack ? TypeCard.BlackCard : TypeCard.GreenCard;

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isBlack ? colors.blackCard : colors.register},
      ]}>
      <Text style={[styles.title, {color: colorText}]}>{typeCard}</Text>
      <Text
        style={[
          styles.textName,
          {
            color: colorText,
          },
        ]}>
        {name}
      </Text>
      <Text
        style={[
          styles.text,
          {
            color: colorText,
          },
        ]}>
        *** *** *** *** {numberCard.substring(numberCard?.length - 4)}
      </Text>
      <Text
        style={[
          styles.text,
          {
            color: colorText,
          },
        ]}>
        Validade {validade}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 180,
    borderRadius: 14,
    padding: 20,
  },
  title: {
    fontSize: 20,
    justifyContent: 'center',
  },
  textName: {
    marginTop: 30,

    fontSize: 16,
    justifyContent: 'center',
  },
  text: {
    marginTop: 10,

    fontSize: 16,
    justifyContent: 'center',
  },
});
