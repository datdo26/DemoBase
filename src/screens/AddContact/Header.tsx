import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View>
      <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
        <TouchableOpacity>
          <Text
            style={{
              marginLeft: 16,
              fontWeight: '400',
              fontSize: 18,
              lineHeight: 22,
              letterSpacing: -0.41,
              color: '#F2A54A',
            }}>
            Huỷ
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              marginRight: 16,
              fontWeight: '400',
              fontSize: 18,
              lineHeight: 22,
              letterSpacing: -0.41,
              color: '#828282',
            }}>
            Xong
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
