import React, {Component} from 'react';
import {View} from 'react-native';
import Header from './src/components/headers';
import AlbumList from './src/components/AlbumList.js';
const App=()=>(
  <View style={{flex:1}}>
    <Header headerText={'Albums!'} />
     <AlbumList />
  </View>

);

export default App
