import {
  ImageBackground,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Container, Wrapper, OrangeText} from '../styled/wrapper';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../nav/RootStack';

const Login = () => {
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <Container>
      {/* image backgorund */}
      <ImageBackground
        source={require('../assets/loginscr/Group_63.png')}
        resizeMode="cover"
        style={{alignItems: 'center', marginTop: 97}}>
        <Image source={require('../assets/loginscr/Group.png')} />
      </ImageBackground>
      {/* main content  */}

      {/* 1st part */}
      <Wrapper>
        <OrangeText
          style={{
            fontWeight: '700',
            fontSize: 30,
            lineHeight: 35.16,
            letterSpacing: 0.12,
            color: '#F2A54A',
            marginTop: 20,
          }}>
          Base Contact
        </OrangeText>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: '400',
            fontSize: 15,
            lineHeight: 17.58,
            letterSpacing: 0.12,
          }}>
          Giải pháp quản lý công việc
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: '400',
            fontSize: 15,
            lineHeight: 17.58,
            letterSpacing: 0.12,
          }}>
          & dự án toàn diện cho doanh nghiệp 4.0
        </Text>
      </Wrapper>
      {/* 2nd part */}
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 78,
        }}>
        <Image source={require('../assets/loginscr/Vector.png')} />
        <Text
          style={{
            textAlign: 'center',
            fontWeight: '400',
            fontStyle: 'italic',
            fontSize: 20,
            lineHeight: 20,
            letterSpacing: -0.24,
            color: '#828282',
            marginTop: 76,
          }}>
          Bạn chưa đăng nhập
        </Text>
      </View>
      {/* 3rd part */}
      <Wrapper>
        {/* login1 */}
        <TouchableOpacity
          style={{
            width: 300,
            height: 48,
            backgroundColor: '#F2A54A',
            marginTop: 24,
            borderRadius: 4,
          }}
          onPress={() => navigate('MainTab')}>
          <Text
            style={{
              color: '#FFFFFF',
              fontWeight: '500',
              fontSize: 15,
              lineHeight: 20,
              letterSpacing: -0.24,
              textAlign: 'center',
              marginVertical: 14,
            }}>
            ĐĂNG NHẬP BẰNG BASE ACCOUNT
          </Text>
        </TouchableOpacity>
        {/* login2 */}
        <TouchableOpacity
          style={{
            width: 300,
            height: 48,
            backgroundColor: '#C4C4C4',
            marginTop: 12,
            borderRadius: 4,
          }}>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 15,
              lineHeight: 20,
              letterSpacing: -0.24,
              textAlign: 'center',
              marginVertical: 14,
            }}>
            ĐĂNG NHẬP THỦ CÔNG
          </Text>
        </TouchableOpacity>
      </Wrapper>
    </Container>
  );
};

export default Login;

const styles = StyleSheet.create({});
