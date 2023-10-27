/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {charactersData} from '../redux/actions';

const CharactersList = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const data = useSelector(state => state.data?.results);

  useEffect(() => {
    dispatch(charactersData());
  }, [dispatch]);

  const Item = ({data}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('CharacterDetails', data.id)}>
        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: `#696969`,
            margin: 15,
            borderRadius: 15,
            flexDirection: 'row',
          }}>
          <Image
            style={{width: 150, height: 150, borderRadius: 20}}
            source={{
              uri: data.image,
            }}
          />
          <Text
            style={{
              paddingRight: 70,
              fontWeight: 'bold',
              color: 'white',
            }}>
            {data.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      
      <FlatList
        data={data || []}
        renderItem={({item}) => <Item data={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default CharactersList;
