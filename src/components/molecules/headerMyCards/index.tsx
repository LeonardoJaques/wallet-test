import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors} from '~/assets/colors';
import Icon from 'react-native-vector-icons/Octicons';
import {useNavigation} from '@react-navigation/native';

export default function HeaderMyCards() {
  const navigation = useNavigation();
  return (
    <View style={styles.firstContainer}>
      <View style={styles.boxShadow}>
        <View style={styles.secondContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={20} color={colors.card} />
          </TouchableOpacity>
          <Text style={styles.firstTitle}>Wallet Test</Text>
          <TouchableOpacity onPress={() => console.log('ir')}>
            <Icon name="plus" size={20} color={colors.card} />
          </TouchableOpacity>
        </View>
        <View style={styles.secondTitleView}>
          <Text style={styles.secondTitle}>Meus Cartões</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  firstContainer: {
    backgroundColor: 'white',
    height: '16%',
    width: '100%',
    borderBottomLeftRadius: 65,
    borderBottomRightRadius: 65,
  },
  secondContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  boxShadow: {
    borderColor: '#ddd',
    backgroundColor: 'white',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 10, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 40,
    elevation: 15,
    height: 60,
    width: '100%',
  },
  firstTitle: {
    fontSize: 22,
    color: colors.default,
  },
  secondTitle: {
    fontSize: 22,
    color: colors.card,
  },
  secondTitleView: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop: 30,
  },
});
