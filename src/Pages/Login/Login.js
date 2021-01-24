import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {InputArea, Button} from '../components';
import {Header} from './components/Header';
// TODO: this file  refactoring
function LoginPage() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.inputContainer}>
        <InputArea placeholder="Email Adress" keyboardType="email-address" />
        <InputArea placeholder="Password" secureText={true} />
        <Button />
        <TouchableOpacity style={{alignItems: 'center'}}>
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
