import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {button_style} from './styles';

function Button({onSelect}) {
  return (
    <TouchableOpacity style={button_style.container} onPress={onSelect}>
      <Icon
        name="arrow-right"
        size={30}
        color="#900"
        style={{alignSelf:'center'}}
      />
    </TouchableOpacity>
  );
}

export {Button};
