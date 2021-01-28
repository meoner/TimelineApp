import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RegisterPage, LoginPage, Chat, FavoritePosts} from './Pages';
import auth from '@react-native-firebase/auth';

const Stack = createStackNavigator();

const hasSession = auth().currentUser;

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={hasSession ? 'Chat' : 'Login'}>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Register" component={RegisterPage} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Favorites" component={FavoritePosts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
