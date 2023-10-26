import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CharactersList} from '../screens/CharactersList';
import {CharacterDetails} from '../screens/CharacterDetails';

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CharactersList" component={CharactersList} />
        <Stack.Screen name="CharacterDetails" component={CharacterDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
