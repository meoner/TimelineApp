import React, {useState} from 'react';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import {Header} from './components';
import {InputArea, Button} from '../components';
import {register_style} from './styles/styles';
import auth from '@react-native-firebase/auth';
// TODO: add custom hooks
function RegisterPage({navigation}) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [password, setPassword] = useState('');

  function signUp() {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => console.log(response))
      .catch(({code, message}) => errorMessage(code, message));
  }
  function errorMessage(code, message) {
    Alert.alert(code, message);
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
            <Button onSelect={signUp} />
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}

export {RegisterPage};
