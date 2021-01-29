import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {header} from '../styles/styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function Header({goFavorites, logOut}) {
  return (
    <View style={header.container}>
      <TouchableOpacity onPress={goFavorites}>
        <Icon
          name="cards-heart"
          color="#eb5e0b"
          size={20}
          style={{alignSelf: 'center'}}
        />
        <Text>Beğeniler</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={logOut}>
        <Icon name="logout" color="#eb5e0b" size={40} />
      </TouchableOpacity>
    </View>
  );
}
export {Header};

//<Icon name="logout" color="black" size={20} />
