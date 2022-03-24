import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const {goBack} = useNavigation();

  return (
    <View>
      <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => goBack()}>
          <Image
            source={require('../../assets/ic_back.png')}
            style={{
              marginLeft: 16,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              marginRight: 16,
              fontWeight: '400',
              fontSize: 18,
              lineHeight: 22,
              letterSpacing: -0.41,
              color: '#F2A54A',
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
