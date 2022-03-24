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

const SingleContact = () => {
  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity style={{alignItems: 'center', marginTop: 48}}>
          <Image source={require('../../assets/avatar.png')} />
        </TouchableOpacity>
      </View>
      <View>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: '500',
            fontSize: 18,
            lineHeight: 22,
            letterSpacing: -0.41,
            marginTop: 20,
          }}>
          Nguyễn Tiến Nam
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: '400',
            fontSize: 13,
            lineHeight: 22,
            letterSpacing: -0.41,
            marginTop: 6,
            color: '#828282',
          }}>
          UI/UX Design
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 20,
        }}>
        <TouchableOpacity style={{alignItems: 'center'}}>
          <Image source={require('../../assets/ic_call.png')} />
          <Text
            style={{
              color: '#F2A54A',
              fontWeight: '400',
              fontSize: 11,
              lineHeight: 22,
              letterSpacing: -0.41,
            }}>
            Nhấn gọi điện
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems: 'center'}}>
          <Image source={require('../../assets/ic_msg.png')} />
          <Text
            style={{
              color: '#F2A54A',
              fontWeight: '400',
              fontSize: 11,
              lineHeight: 22,
              letterSpacing: -0.41,
            }}>
            Nhắn tin
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems: 'center'}}>
          <Image source={require('../../assets/ic_vidcall.png')} />
          <Text
            style={{
              color: '#F2A54A',
              fontWeight: '400',
              fontSize: 11,
              lineHeight: 22,
              letterSpacing: -0.41,
            }}>
            Facetime
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems: 'center'}}>
          <Image source={require('../../assets/ic_email.png')} />
          <Text
            style={{
              color: '#BDBDBD',
              fontWeight: '400',
              fontSize: 11,
              lineHeight: 22,
              letterSpacing: -0.41,
            }}>
            Gửi mail
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity></TouchableOpacity>
      <View
        style={{
          marginHorizontal: 16,
          marginTop: 17,
          borderBottomWidth: 0.5,
          borderBottomColor: '#0000001A',
          height: 64,
        }}>
        <Text
          style={{
            fontWeight: '400',
            fontSize: 13,
            lineHeight: 22,
            letterSpacing: -0.41,
          }}>
          Điện thoại
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              color: '#2F80ED',
              fontWeight: '400',
              fontSize: 17,
              lineHeight: 22,
              letterSpacing: -0.41,
              marginTop: 3,
            }}>
            0977272160
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginHorizontal: 16,
          marginTop: 17,
          borderBottomWidth: 0.5,
          borderBottomColor: '#0000001A',
          height: 64,
        }}>
        <Text
          style={{
            fontWeight: '400',
            fontSize: 13,
            lineHeight: 22,
            letterSpacing: -0.41,
          }}>
          Ghi Chú
        </Text>
        <TextInput placeholder="" style={{height: 33}} />
      </View>
      <View
        style={{
          marginHorizontal: 16,
          marginTop: 17,
          borderBottomWidth: 0.5,
          borderBottomColor: '#0000001A',
        }}>
        <TouchableOpacity>
          <Text
            style={{
              fontWeight: '400',
              fontSize: 15,
              lineHeight: 22,
              letterSpacing: -0.41,
              height: 44,
            }}>
            Gửi tin nhắn
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginHorizontal: 16,
          marginTop: 17,
          borderBottomWidth: 0.5,
          borderBottomColor: '#0000001A',
        }}>
        <TouchableOpacity>
          <Text
            style={{
              fontWeight: '400',
              fontSize: 15,
              lineHeight: 22,
              letterSpacing: -0.41,
              height: 44,
              color: '#FF4A4A',
            }}>
            Xoá người gọi
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SingleContact;

const styles = StyleSheet.create({});
