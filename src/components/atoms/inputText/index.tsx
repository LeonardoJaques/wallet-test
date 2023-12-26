import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '~/assets/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {MaskedTextInput} from 'react-native-mask-text';

export default function InputText({
  input,
  onChangeText,
  value,
  style,
  icon,
  iconPosition = 'right',
  iconName,
  clickableIcon,
  mask,
  placeholder,
  secureTextEntry,
}: {
  input: string;
  onChangeText: (text: string) => void;
  value: string;
  style?: any;
  icon?: boolean;
  iconPosition?: 'left' | 'right';
  iconName?: string;
  clickableIcon?: () => void;
  mask?: string;
  placeholder?: string;
  secureTextEntry?: boolean;
}) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>{input}</Text>
      {icon && (
        <TouchableOpacity
          style={[
            styles.icon,
            iconPosition === 'left'
              ? styles.positionRight
              : styles.positionLeft,
          ]}
          onPress={clickableIcon}>
          <Icon
            name={iconName ? iconName : ''}
            size={20}
            color={colors.white}
          />
        </TouchableOpacity>
      )}
      <MaskedTextInput
        style={[styles.input, icon && styles.spaceCursor]}
        onChangeText={onChangeText}
        value={value}
        inlineImagePadding={20}
        underlineColorAndroid={'transparent'}
        numberOfLines={1}
        mask={mask}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={colors.disabledText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    backgroundColor: colors.white,
    marginTop: 12,
    marginBottom: 12,
    borderRadius: 5,
    padding: 10,
    width: '100%',
  },
  text: {
    color: colors.white,
    alignContent: 'flex-start',
  },
  container: {
    width: '80%',
    alignItems: 'flex-start',
  },
  icon: {
    position: 'absolute',
    backgroundColor: colors.card,
    borderRadius: 50,
    padding: 5,
    top: 40,
    zIndex: 1,
  },
  positionRight: {
    right: 10,
  },
  positionLeft: {
    left: 10,
  },
  spaceCursor: {
    paddingLeft: 42,
  },
});
