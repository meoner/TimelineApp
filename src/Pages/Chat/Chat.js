import React, {useState, useEffect} from 'react';
import {View, Text, Button, FlatList, TextInput} from 'react-native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import moment from 'moment';
import 'moment/locale/tr';
//TODO: Post eklendikten sonra input'u boşalt.
//TODO: Boş Post eklenmesin.
//TODO: 140 Karakter sınırı ekle.
//TODO: Arrayi zamana göre sırala
function Chat() {
  //auth().signOut();
  const [text, setText] = useState('');
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    database()
      .ref('post')
      .on('value', (snapshot) => {
        console.log(snapshot);
        const data = snapshot.val();
        if (!data) {
          return null;
        }
        setPostData(Object.values(data));
      });
  }, []);

  function addPush() {
    database().ref('post').push({
      Text: text,
      mail: auth().currentUser.email,
      time: new Date().getTime(),
    });
  }

  function renderPost({item}) {
    return (
      <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>{item.mail.split('@')[0]}</Text>
          <Text>{moment(item.time).fromNow()}</Text>
        </View>
        <View>
          <Text>{item.Text}</Text>
        </View>
      </View>
    );
  }
  return (
    <View>
      <Text> Chat page</Text>
      <FlatList
        keyExtractor={(_, i) => i.toString()}
        data={postData}
        renderItem={renderPost}
      />
      <TextInput onChangeText={(value) => setText(value)} />
      <Button title="Ekle" onPress={addPush} />
    </View>
  );
}

export {Chat};
