import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../nav/RootStack';

const WrapView = styled.SafeAreaView``;

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
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.24px;
  color: #828282;
  margin-top: 76;
`;
const LoginBase = styled.TouchableOpacity`
  height: 48px;
  background: #f2a54a;
  border-radius: 4px;
  margin-top: 24;
  margin-horizontal: 38px;
  padding: 14px;
`;

const LoginText1 = styled.Text`
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: -0.24px;
  text-transform: uppercase;
  text-align: center;
  color: #ffffff;
`;

const LoginText2 = styled.Text`
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.24px;
  text-transform: uppercase;
  color: #f2a54a;
`;

const LoginButton = styled.TouchableOpacity`
  border: 1px solid #f2a54a;
  box-sizing: border-box;
  border-radius: 4px;
  margin-horizontal: 38px;
  padding: 14px;
  margin-top: 12;
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

      <LoginBase onPress={() => navigate('SideDrawer')}>
        <LoginText1>ĐĂNG NHẬP BẰNG BASE ACCOUNT</LoginText1>
      </LoginBase>
      <LoginButton>
        <LoginText2>ĐĂNG NHẬP THỦ CÔNG</LoginText2>
      </LoginButton>
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
});
