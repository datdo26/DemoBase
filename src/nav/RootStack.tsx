import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import MainTab from './MainTab';
import Login from '../screens/Login';
import AddContact from '../screens/AddContact/AddContact';
import SingleContact from '../screens/SingleContact/SingleContact';
import SideDrawer from '../screens/Drawer/Drawer';

export type RootStackParamList = {
  MainTab: undefined;
  AddContact: undefined;
  SingleContact: undefined;
  Login: undefined;
  SideDrawer: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MainTab"
          component={MainTab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddContact"
          component={AddContact}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SingleContact"
          component={SingleContact}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SideDrawer"
          component={SideDrawer}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;

const styles = StyleSheet.create({});
