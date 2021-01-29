import React, {useState, useEffect} from 'react';
import {View, Button, FlatList, TextInput, Alert} from 'react-native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import {PostItem, Header} from './components';
import {text_area} from './styles/styles';
import 'moment/locale/tr';

//TODO: Refactor
//TODO: Empty , loading state
//TODO: Hooks yapısı
//TODO: Fav tuşuna geri basıldığında favdan çıksın.

function Chat({navigation}) {
  //auth().signOut();
  const [newPost, setNewPost] = useState('');
  const [postData, setPostData] = useState([]);
  const [favlar, setFavlar] = useState([]);

  useEffect(() => {
    haveData();
    database()
      .ref('post')
      .on('value', (snapshot) => {
        const data = snapshot.val();
        if (!data) {
          return;
        }
        const sortData = Object.values(data);
        sortData.sort(function (a, b) {
          return b.time - a.time;
        });
        setPostData(sortData);
      });
  }, []);

  function addPush() {
    if (newPost) {
      database().ref('post').push({
        Text: newPost,
        mail: auth().currentUser.email,
        time: new Date().getTime(),
      });
      setNewPost('');
    } else {
      Alert.alert('Hata mesajı!', 'Gönderi boş olamaz !!');
    }
  }

  function haveData() {
    database()
      .ref(`${auth().currentUser.uid}`)
      .on('value', (snapshot) => {
        const data = snapshot.val();
        if (!data) {
          return;
        }
        const sortData = Object.values(data);
        sortData.sort(function (a, b) {
          return b.time - a.time;
        });
        setFavlar(sortData);
      });
  }

  function addFavorites(data) {
    let havePiece = favlar.find(
      (value) => JSON.stringify(value) === JSON.stringify(data),
    );
    if (!havePiece) {
      database().ref(`${auth().currentUser.uid}`).push(data);
    }
  }

  function renderPost({item}) {
    return <PostItem item={item} addFav={() => addFavorites(item)} />;
  }

  return (
    <View style={{flex: 1}}>
      <Header
        goFavorites={() => navigation.navigate('Favorites')}
        logOut={() =>
          auth()
            .signOut()
            .then(() => navigation.navigate('Login'))
        }
      />
      <FlatList
        keyExtractor={(_, i) => i.toString()}
        data={postData}
        renderItem={renderPost}
      />
      <View />
      <View style={text_area.inputContainer}>
        <TextInput
          style={text_area.input}
          onChangeText={(value) => setNewPost(value)}
          value={newPost}
          maxLength={140}
          placeholder="Sadece 140 karakter :)"
        />
      </View>
      <View style={{width: 300, alignSelf: 'center'}}>
        <Button title="Ekle" onPress={addPush} color="#eb5e0b" />
      </View>
    </View>
  );
}

export {Chat};
