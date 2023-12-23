import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '@colors/index';

type typeButton = 'advenced' | 'register' | 'card';
export default function ButtonWallet({
  disabled,
  onPress,
  typeButton,
  title,
}: {
  disabled?: boolean;
  onPress: () => void;
  typeButton: typeButton;
  title: string;
}) {
  function changeBackgroundColor(type: typeButton) {
    switch (type) {
      case 'advenced':
        return colors.default;
      case 'register':
        return colors.register;
      case 'card':
        return colors.card;
      default:
    }
  }

  function changeTextColor(type: typeButton) {
    switch (type) {
      case 'advenced':
        return colors.white;
      case 'register':
        return colors.default;
      case 'card':
        return colors.white;
      default:
    }
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.buttonWallet,
        {
          backgroundColor: disabled
            ? colors.disabled
            : changeBackgroundColor(typeButton),
        },
      ]}>
      <Text
        style={{
          color: changeTextColor(typeButton),
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonWallet: {
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginVertical: 10,
  },
});
