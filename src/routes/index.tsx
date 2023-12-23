import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '@screens/home';

enum RoutesEnums {
  Home = 'Home',
}
export default function Routes() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={RoutesEnums.Home}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={RoutesEnums.Home} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
