import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export const CharactersList = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>CharactersList</Text>
      <TouchableOpacity onPress={() => navigation.navigate('CharacterDetails')}>
        <Text>See Details</Text>
      </TouchableOpacity>
    </View>
  );
};
