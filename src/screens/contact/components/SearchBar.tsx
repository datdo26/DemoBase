import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const width = Dimensions.get('window').width;

const SearchBar = ({onSearchEnter}) => {
  const [term, setTerm] = React.useState('');
  return (
    <SafeAreaView
      style={{
        width: width - 20,
        height: 46,
        backgroundColor: '#C4C4C4',
        justifyContent: 'center',
        borderRadius: 4,
        marginHorizontal: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Image
          source={require('../../../assets/ic_search.png')}
          style={{width: 24, height: 24}}
        />
        <TextInput
          placeholder="Tìm kiếm danh bạ"
          style={{marginLeft: 16}}
          value={term}
          onChangeText={newText => {
            setTerm(newText);
          }}
          onEndEditing={() => {
            onSearchEnter(term);
          }}
        />
        <TouchableOpacity
          onPress={() => {
            setTerm('');
            onSearchEnter('');
          }}>
          <Image source={require('../../../assets/close.png')} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
