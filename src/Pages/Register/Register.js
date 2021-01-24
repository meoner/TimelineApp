import React from 'react';
import {View, KeyboardAvoidingView, Platform} from 'react-native';
import {Header, InputArea, Button} from './components';
import {register_style} from './styles/styles';

function RegisterPage() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <View style={register_style.firstContainer}>
        <Header />
        <View style={register_style.secondContainer}>
          <InputArea placeholder="Email Adress" />
          <InputArea placeholder="Name" />
          <InputArea placeholder="Surname" />
          <InputArea placeholder="Password" />
          <Button />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

export {RegisterPage};
