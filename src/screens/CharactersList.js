import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';

const CharactersList = ({charactersList}) => {
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

const mapStateToProps = state => ({
  charactersList: state.charactersList,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CharactersList);
