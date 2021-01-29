import React from 'react';
import {View, Text, Dimensions} from 'react-native';

function Empty() {
  const height = Dimensions.get('window').height;
  const width = Dimensions.get('window').width;

  return (
    <View
      style={{
        height: height,
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Henüz gönderi yok..</Text>
    </View>
  );
}

export {Empty};
