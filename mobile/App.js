import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import MapViews from './screens/mapView'

export default function App() {
  return (
    <View style={styles.container}>
      <MapViews/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginTop : Constants.statusBarHeight,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
