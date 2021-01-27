import React from 'react';
import {View, Text} from 'react-native';
import auth from '@react-native-firebase/auth';

function Chat() {
  auth().signOut();
  return (
    <View>
      <Text> Chat page</Text>
    </View>
  );
}

export {Chat};
