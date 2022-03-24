import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Contact from '../Contact/Contact';
import Recent from '../Recent/Recent';

const Drawer = createDrawerNavigator();

const SideDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Liên Hệ" component={Contact} />
      <Drawer.Screen name="Gần Đây" component={Recent} />
    </Drawer.Navigator>
  );
};

export default SideDrawer;

const styles = StyleSheet.create({});
