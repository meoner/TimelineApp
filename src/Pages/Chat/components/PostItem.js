import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {post_item_styles} from '../styles/styles';
import moment from 'moment';
import 'moment/locale/tr';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function PostItem({item, addFav}) {
  return (
    <View style={post_item_styles.container}>
      <View style={{flex:11, marginBottom:15}}>
        <View style={post_item_styles.itemTitle}>
          <Text style={post_item_styles.mail}>@{item.mail.split('@')[0]}</Text>
          <Text style={post_item_styles.time}>
            {moment(item.time).fromNow()}
          </Text>
        </View>
        <View style={post_item_styles.itemText}>
          <Text style={post_item_styles.text}>{item.Text}</Text>
        </View>
      </View>
      <View style={post_item_styles.itemFavorite}>
        <TouchableOpacity onPress={addFav}>
          <Icon name="heart-outline" color="#eb5e0b" size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
export {PostItem};
//<Icon name="rocket" size={30} color="#900" />;
