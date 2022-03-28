// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import RootStack from './src/nav/RootStack';

// const App = () => {
//   return <RootStack />;
// };

// export default App;

// const styles = StyleSheet.create({});

import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const App = () => {
  return (
    <SafeAreaView>
      <Icon name="comments" size={30} color="#900" />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
