import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {post_item_styles} from '../Chat/styles/styles';
import moment from 'moment';
import 'moment/locale/tr';

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
        setFavList(sortData);
      });
  }, []);
  function renderPost({item}) {
    return (
      <View style={post_item_styles.container}>
        <View style={{flex: 11, marginBottom: 15}}>
          <View style={post_item_styles.itemTitle}>
            <Text style={post_item_styles.mail}>
              @{item.mail.split('@')[0]}
            </Text>
            <Text style={post_item_styles.time}>
              {moment(item.time).fromNow()}
            </Text>
          </View>
          <View style={post_item_styles.itemText}>
            <Text style={post_item_styles.text}>{item.Text}</Text>
          </View>
        </View>
      </View>
    );
  }
  return (
    <View>
      <Text style={{fontSize: 23, fontWeight: 'bold', color: '#eb5e0b'}}>
        Beğeniler
      </Text>
      <FlatList
        keyExtractor={(_, i) => i.toString()}
        data={favList}
        renderItem={renderPost}
      />
    </View>
  );
}
export {FavoritePosts};
