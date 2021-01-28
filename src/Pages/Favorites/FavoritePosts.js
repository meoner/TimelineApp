import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

function FavoritePosts() {
  const [favList, setFavList] = useState([]);
  useEffect(() => {
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
        console.log(sortData);
        setFavList(sortData);
      });
  }, []);
  function renderPost({item}) {
    return (
      <View>
        <Text>{item.Text}</Text>
      </View>
    );
  }
  return (
    <View>
      <Text>sayfa hayatta</Text>
      <FlatList
        keyExtractor={(_, i) => i.toString()}
        data={favList}
        renderItem={renderPost}
      />
    </View>
  );
}
export {FavoritePosts};
