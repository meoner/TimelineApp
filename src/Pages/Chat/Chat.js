import React, {useState, useEffect} from 'react';
import {View, Text, Button, FlatList, TextInput} from 'react-native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import {PostItem, Header} from './components';
import moment from 'moment';
import 'moment/locale/tr';
//TODO: Refactor
//TODO: Post eklendikten sonra input'u boşalt.
//TODO: Boş Post eklenmesin.
//TODO: 140 Karakter sınırı ekle.
//TODO: stillendirme
//TODO: Aynı post iki kere fava alınmasın.
//TODO: Fav tuşuna geri basıldığında favdan çıksın.
function Chat({navigation}) {
  //auth().signOut();
  const [newPost, setNewPost] = useState('');
  const [postData, setPostData] = useState([]);

  useEffect(() => {
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
        console.log(sortData);
        setPostData(sortData);
      });
  }, []);

  function addPush() {
    database().ref('post').push({
      Text: newPost,
      mail: auth().currentUser.email,
      time: new Date().getTime(),
    });
  }

  function renderPost({item}) {
    return (
      <PostItem
        item={item}
        addFav={() => database().ref(`${auth().currentUser.uid}`).push(item)}
      />
    );
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
      <TextInput onChangeText={(value) => setNewPost(value)} />
      <Button title="Ekle" onPress={addPush} />
    </View>
  );
}

export {Chat};
/*
<ScrollView style={{flex: 1}}>
</ScrollView>*/
