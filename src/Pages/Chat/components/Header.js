import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function Header({goFavorites, logOut}) {
  return (
    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
      <TouchableOpacity onPress={goFavorites}>
        <Text>Begen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={logOut}>
        <Text>çıkış</Text>
      </TouchableOpacity>
    </View>
  );
}
export {Header};

//<Icon name="rocket" color="black" size={20} />
