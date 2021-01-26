import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import {InputArea, Button} from '../components';
import {Header} from './components/Header';
import auth from '@react-native-firebase/auth';

// TODO: this file  refactoring
function LoginPage({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function signIn() {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => console.log('then works', response))
      .catch(({code, message}) => errorMessage(code, message));
  }

  function errorMessage(code, message) {
    Alert.alert(code, message);
  }
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.inputContainer}>
        <InputArea
          placeholder="Email Adress"
          keyboardType="email-address"
          onText={(text) => setEmail(text)}
        />
        <InputArea
          placeholder="Password"
          secureText={true}
          onText={(text) => setPassword(text)}
        />
        <Button onSelect={signIn} />
        <TouchableOpacity
          style={{alignItems: 'center'}}
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerText}>Don't have a account ?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export {LoginPage};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  inputContainer: {
    flex: 3,
    backgroundColor: 'white',
    marginTop: 50,
  },
  registerText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
