import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../nav/RootStack';

const WrapView = styled.SafeAreaView`
  background-color: #fff;
`;

const Title = styled.Text`
  font-weight: 700;
  font-size: 30px;
  line-height: 35px;
  letter-spacing: 0.12px;
  text-align: center;
  color: #f2a54a;
  margin-top: 20;
`;

const Text1 = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.12px;
  color: #333333;
  margin-top: 7;
`;

const Text2 = styled.Text`
  font-style: italic;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.24px;
  color: #828282;
  margin-top: 76;
`;
const LoginButton = styled.TouchableOpacity`
  margin-vertical: 40px;
  width: 120px;
  height: 40px;
  padding: 12px;
  border-radius: 10px;
  background-color: 'red';
`;

const LoginText = styled.Text`
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.24px;
  text-transform: uppercase;
  color: #ffffff;
`;

const Login = () => {
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <WrapView>
      <Image source={require('../assets/banner.png')} style={styles.banner} />
      <Title>Base Contact</Title>
      <Text1>
        Giải pháp quản lý công việc {'\n'} & dự án toàn diện cho doanh nghiệp
        4.0
      </Text1>
      <Image
        source={require('../assets/loginscr/Vector.png')}
        style={styles.vector}
      />
      <Text2>Bạn chưa đăng nhập</Text2>
      <TouchableOpacity
        style={styles.LoginButton1}
        onPress={() => navigate('MainTab')}>
        <Text style={styles.LoginText1}>ĐĂNG NHẬP BẰNG BASE ACCOUNT</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.LoginButton2}>
        <Text style={styles.LoginText2}>ĐĂNG NHẬP THỦ CÔNG</Text>
      </TouchableOpacity>
    </WrapView>
  );
};

export default Login;

const styles = StyleSheet.create({
  banner: {
    marginTop: 80,
  },
  vector: {
    alignSelf: 'center',
    marginTop: 78,
  },
  LoginButton1: {
    width: 300,
    height: 48,
    backgroundColor: '#F2A54A',
    marginTop: 24,
    borderRadius: 4,
    alignSelf: 'center',
  },
  LoginText1: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: -0.24,
    textAlign: 'center',
    marginVertical: 14,
  },
  LoginButton2: {
    width: 300,
    height: 48,
    backgroundColor: '#fff',
    borderColor: '#F2A54A',
    borderWidth: 1,
    marginTop: 12,
    borderRadius: 4,
    alignSelf: 'center',
  },
  LoginText2: {
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: -0.24,
    textAlign: 'center',
    marginVertical: 14,
    color: '#F2A54A',
  },
});
