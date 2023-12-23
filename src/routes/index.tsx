import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '@screens/home';
import RegisterCards from '@screens/registerCards';

enum RoutesEnums {
  Home = 'Home',
  Register = 'Register',
}
export default function Routes() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={RoutesEnums.Home}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={RoutesEnums.Home} component={HomeScreen} />
        <Stack.Screen name={RoutesEnums.Register} component={RegisterCards} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
