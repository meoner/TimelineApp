import React from 'react';
import {Text, View} from 'react-native';
import {header_style} from '../styles/styles';

function Header() {
  return (
    <View style={header_style.container}>
      <Text style={header_style.title}>Hello Beautiful</Text>
      <Text style={header_style.description}>
        Enter your informations below and enjoy with us
      </Text>
    </View>
  );
}

export {Header};
