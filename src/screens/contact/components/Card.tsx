import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';
import {IDoctor} from '../../../data/informations';
import {FlatList} from 'react-native-gesture-handler';
import axios from 'axios';
import {SearchBar} from 'react-native-screens';

const width = Dimensions.get('window').width;

const Card = () => {
  const [data, setData] = React.useState([]);
  const [err, setErr] = React.useState('');
  const [term, setTerm] = React.useState('');

  const getData = name => {
    axios
      .get(`https://61a718ea8395690017be94dc.mockapi.io/Doctor?name=${name}`)
      .then(res => {
        if (res.data.length > 0) {
          setData(res.data);
        } else {
          setData([]);
          setErr(' No doctor found');
        }
      });
  };

  React.useEffect(() => {
    getData(term);
  }, [term]);

  const renderCard = ({item}) => {
    return (
      <View
        style={{
          backgroundColor: 'white',
          width: width,
          height: 70,
          alignItems: 'center',
          flexDirection: 'row',
          borderBottomWidth: 1,
        }}>
        <Image
          source={{uri: `${item.img}`}}
          style={{
            marginLeft: 16,
            width: 40,
            height: 40,
            borderRadius: 30,
          }}
        />
        <View style={{marginLeft: 16}}>
          <Text
            style={{
              color: '#09051C',
              fontSize: 15,
              fontWeight: '500',
              lineHeight: 15,
              letterSpacing: 0.12,
            }}>
            {item.name}
          </Text>
          <Text>{item.phone}</Text>
        </View>
      </View>
    );
  };

  return (
    <View>
      <SearchBar
        onSearchEnter={newTerm => {
          setTerm(newTerm);
          setErr('');
        }}
      />
      {err ? (
        <Text>{err}</Text>
      ) : (
        <FlatList
          data={data}
          renderItem={renderCard}
          keyExtractor={Doctor => Doctor.name}
        />
      )}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});
