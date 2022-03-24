import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import SearchBar from './components/SearchBar';
import Card from './components/Card';

const Contact = () => {
  return (
    <SafeAreaView>
      <SearchBar onSearchEnter={undefined} />
      <Card />
    </SafeAreaView>
  );
};

export default Contact;

const styles = StyleSheet.create({});
