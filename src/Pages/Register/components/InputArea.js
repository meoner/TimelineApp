import React from 'react';
import {View, TextInput} from 'react-native';
import {inputarea_style} from '../styles/styles';

function InputArea({placeholder}) {
  return (
    <View style={inputarea_style.container}>
      <TextInput
        style={inputarea_style.input}
        placeholder={placeholder}
        onChangeText={(text) => console.log(text)}
      />
    </View>
  );
}
export {InputArea};
