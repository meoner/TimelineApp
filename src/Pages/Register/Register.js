import React from 'react';
import {View, KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import {Header} from './components';
import {InputArea, Button} from '../components';
import {register_style} from './styles/styles';

function RegisterPage() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <View style={register_style.firstContainer}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <Header />
          <View style={register_style.secondContainer}>
            <InputArea
              placeholder="Email Adress"
              keyboardType="email-address"
            />
            <InputArea placeholder="Name" />
            <InputArea placeholder="Surname" />
            <InputArea placeholder="Password" secureText={true} />
            <Button />
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}

export {RegisterPage};
