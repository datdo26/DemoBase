import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Contact from '../screens/contact/Contact';
import Recent from '../screens/recent/Recent';
export type MainTabParamLists = {
  Contact: undefined;
  Recent: undefined;
};

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarStyle: {
          height: 80,
          backgroundColor: '#F2A54A',
        },
      }}>
      <Tab.Screen
        name="Liên hệ"
        component={Contact}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Image source={require('../assets/contact/ic_contact.png')} />
          ),
        }}
      />
      <Tab.Screen
        name="Gần đây"
        component={Recent}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Image source={require('../assets/recent/ic_recent.png')} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;

const styles = StyleSheet.create({});
