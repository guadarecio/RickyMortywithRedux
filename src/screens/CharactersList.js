/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {charactersData} from '../redux/actions';

const CharactersList = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const data = useSelector(state => state.data?.results);
  const [text, setText] = useState('');
  const [filteredDataAll, setFilteredDataAll] = useState(null);

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

  const filterCharacters = searchedText => {
    setText(searchedText);
    const filteredData = data?.filter(item => item.name.includes(text));
    setFilteredDataAll(filteredData);
  };

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <TextInput
        style={{
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
          backgroundColor: 'gray',
          borderRadius: 10,
        }}
        onChangeText={searchedText => filterCharacters(searchedText)}
        value={text}
        placeholder="Search"
        placeholderTextColor={'white'}
      />
      <FlatList
        data={filteredDataAll || data}
        renderItem={({item}) => <Item data={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default CharactersList;
