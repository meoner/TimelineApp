import React, {useState} from 'react';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
  Text,
} from 'react-native';
import {Header} from './components';
import {InputArea, Button} from '../components';
import {register_style} from './styles/styles';
import {useSign} from '../hooks/useSign';

function RegisterPage({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {loading, error, response, signUp, _, errorReset} = useSign();

  function register() {
    signUp(email, password);
  }
  if (response) {
    navigation.navigate('Login');
  }
  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  if (error) {
    Alert.alert('Error', error.message);
    errorReset();
  }

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
              onText={(text) => setEmail(text)}
            />
            <InputArea placeholder="Name" onText={(text) => setName(text)} />
            <InputArea
              placeholder="Surname"
              onText={(text) => setSurname(text)}
            />
            <InputArea
              placeholder="Password"
              secureText={true}
              onText={(text) => setPassword(text)}
            />
            <Button onSelect={register} />
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}

export {RegisterPage};
