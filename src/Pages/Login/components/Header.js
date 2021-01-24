import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome !</Text>
      <Text style={{alignSelf: 'center'}}>
        We are happy to see you among us :) ...
      </Text>
    </View>
  );
}

export {Header};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffc000',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    justifyContent: 'center',
  },
  header: {
    alignSelf: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});
