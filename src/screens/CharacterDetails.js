import React from 'react';
import {View, Text, Image} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';

export const CharacterDetails = () => {
  const data = useSelector(state => state.data?.results);
  const route = useRoute();

  const characterId = route.params;

  const characterData = data.find(element => element.id === characterId);

  return (
    <View style={{flex: 1, backgroundColor: 'black', padding: 25}}>
      {characterData && (
        <View
          style={{
            backgroundColor: `#696969`,
            borderRadius: 70,
            padding: 15,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 25,
              color: 'white',
              textAlign: 'center',
              marginTop: 20,
              marginBottom: 40,
            }}>
            {characterData.name}
          </Text>
          <Image
            style={{
              width: '100%',
              height: '50%',
              borderRadius: 20,
              marginBottom: 50,
            }}
            source={{
              uri: characterData.image,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}>
            <Text style={{fontSize: 15, color: `#f8f8ff`}}>Species </Text>
            <Text style={{fontSize: 15, color: `#f8f8ff`, fontWeight: 'bold'}}>
              {characterData.species}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}>
            <Text style={{fontSize: 15, color: `#f8f8ff`}}>Status</Text>
            <Text style={{fontSize: 15, color: `#f8f8ff`, fontWeight: 'bold'}}>
              {characterData.status}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}>
            <Text style={{fontSize: 15, color: `#f8f8ff`}}>Gender</Text>
            <Text style={{fontSize: 15, color: `#f8f8ff`, fontWeight: 'bold'}}>
              {characterData.gender}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}>
            <Text style={{fontSize: 15, color: `#f8f8ff`}}>Location</Text>
            <Text style={{fontSize: 15, color: `#f8f8ff`, fontWeight: 'bold'}}>
              {characterData.location.name}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};
