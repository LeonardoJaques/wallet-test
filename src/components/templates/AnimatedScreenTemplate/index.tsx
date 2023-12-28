import React, {useEffect} from 'react';
import AnimatedScreen from '@atoms/animatedScreen/index';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import {colors} from '@colors/index';
import {useNavigation} from '@react-navigation/native';

const AnimatedScreenTemplate = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home' as never);
    }, 3000);
  }, [navigation]);
  return (
    <AnimatedScreen>
      <View style={styles.container}>
        <Icon name="server" size={90} color={colors.card} />
      </View>
    </AnimatedScreen>
  );
};

export default AnimatedScreenTemplate;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
