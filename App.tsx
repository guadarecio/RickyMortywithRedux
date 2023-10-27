import React from 'react';
import {View} from 'react-native';
import {StackNavigator} from './src/navigator/StackNavigator';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

export const App = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <StackNavigator />
      </View>
    </Provider>
  );
};
