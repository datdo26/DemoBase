import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import Header from './Header';

const AddContact = () => {
  return (
    <SafeAreaView>
      <Header />
      <View>
        <TouchableOpacity style={{alignItems: 'center', marginTop: 48}}>
          <Image source={require('../../assets/ic_avatar.png')} />
        </TouchableOpacity>
        <View>
          <TextInput
            placeholder="Họ"
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#0000001A',
              height: 44,
              marginHorizontal: 16,
            }}
          />
          <TextInput
            placeholder="Tên"
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#0000001A',
              height: 44,
              marginHorizontal: 16,
            }}
          />
          <TextInput
            placeholder="Công ty"
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#0000001A',
              height: 44,
              marginHorizontal: 16,
            }}
          />
        </View>
        <View style={{marginTop: 24}}>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 16,
              borderBottomWidth: 1,
              borderBottomColor: '#0000001A',
            }}>
            <TouchableOpacity>
              <Image source={require('../../assets/ic_add.png')} />
            </TouchableOpacity>
            <TextInput
              style={{marginLeft: 16}}
              placeholder="thêm số điện thoại"
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 16,
              borderBottomWidth: 1,
              borderBottomColor: '#0000001A',
              marginTop: 24,
            }}>
            <TouchableOpacity>
              <Image source={require('../../assets/ic_add.png')} />
            </TouchableOpacity>
            <TextInput style={{marginLeft: 16}} placeholder="thêm email" />
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 16,
              borderBottomWidth: 1,
              borderBottomColor: '#0000001A',
              marginTop: 24,
            }}>
            <TouchableOpacity>
              <Image source={require('../../assets/ic_add.png')} />
            </TouchableOpacity>
            <TextInput style={{marginLeft: 16}} placeholder="thêm địa chỉ" />
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 16,
              borderBottomWidth: 1,
              borderBottomColor: '#0000001A',
              marginTop: 24,
            }}>
            <TouchableOpacity>
              <Image source={require('../../assets/ic_add.png')} />
            </TouchableOpacity>
            <TextInput style={{marginLeft: 16}} placeholder="thêm ngày sinh" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddContact;

const styles = StyleSheet.create({});
