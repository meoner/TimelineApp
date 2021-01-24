import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import {inputarea_style} from './styles';

function InputArea({placeholder, keyboardType, secureText}) {
  const [focus, setFocus] = useState(false);

  return (
    <View style={inputarea_style.container}>
      <TextInput
        style={
          focus
            ? [inputarea_style.input, {borderColor: 'white'}]
            : inputarea_style.input
        }
        onBlur={() => setFocus(false)}
        onFocus={() => setFocus(true)}
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={secureText}
        onChangeText={(text) => console.log(text)}
      />
    </View>
  );
}
export {InputArea};
