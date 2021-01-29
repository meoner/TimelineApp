import React from 'react';
import {View, Text, Dimensions, ActivityIndicator} from 'react-native';

function Loading() {
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
      <ActivityIndicator size="large" />
    </View>
  );
}

export {Loading};
