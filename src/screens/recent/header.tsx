import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React from 'react';

const width = Dimensions.get('window').width;

const Header = () => {
  return (
    <View
      style={{
        backgroundColor: '#F2F2F2',
        width: width,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <TouchableOpacity>
        <Image
          source={require('../../assets/contact/more.png')}
          style={{marginLeft: 19}}
        />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 30,
          fontWeight: '500',
          color: 'black',
          textAlign: 'center',
        }}>
        Lịch sử
      </Text>
      <TouchableOpacity>
        <Image
          source={require('../../assets/contact/ic_camera.png')}
          style={{marginRight: 19}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
