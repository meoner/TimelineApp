import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import {InputArea, Button} from '../components';
import {Header} from './components/Header';
import {useSign} from '../hooks/useSign';

// TODO: this file  refactoring
function LoginPage({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {loading, error, response, _, signIn, errorReset} = useSign();

  function login() {
    signIn(email, password);
  }
  if (response) {
    navigation.navigate('Chat');
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
        <Button onSelect={login} />
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
