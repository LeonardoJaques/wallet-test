import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '~/assets/colors';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Header({title}: {title: string}) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Icon name="arrow-back-outline" size={30} color={colors.card} />
      </TouchableOpacity>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 10,
  },
  text: {
    color: colors.card,
    fontSize: 30,
    marginLeft: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
