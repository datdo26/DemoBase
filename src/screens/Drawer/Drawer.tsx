import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Contact from '../Contact/Contact';
import Recent from '../Recent/Recent';
import MainTab from '../../nav/MainTab';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Drawer = createDrawerNavigator();

const Stack = createBottomTabNavigator();

const SideDrawer = () => {
  return (
    <Drawer.Navigator>
      <Stack.Screen name="Home" component={MainTab} />
    </Drawer.Navigator>
  );
};

export default SideDrawer;

const styles = StyleSheet.create({});
