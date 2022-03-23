import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

const NewCollection = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
      }}>
      <Button onPress={() => navigation.navigate('All')} title="Go to All" />
    </View>
  );
};

const All = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('All')}
        title="Go to New Collection"
      />
    </View>
  );
};

const Drawer = createDrawerNavigator();

const Side_Drawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="New Collection" component={NewCollection} />
      <Drawer.Screen name="All" component={All} />
    </Drawer.Navigator>
  );
};

export default Side_Drawer;

const styles = StyleSheet.create({});
