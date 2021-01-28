import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {post_item_styles} from '../styles/styles';
import moment from 'moment';
import 'moment/locale/tr';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function PostItem({item, addFav}) {
  return (
    <View style={post_item_styles.container}>
      <View style={post_item_styles.itemTitle}>
        <Text style={post_item_styles.mail}>@{item.mail.split('@')[0]}</Text>
        <Text style={post_item_styles.time}>{moment(item.time).fromNow()}</Text>
      </View>
      <View style={post_item_styles.itemText}>
        <Text style={post_item_styles.text}>{item.Text}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={addFav}>
          <Icon name="heart-outline" color="black" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
export {PostItem};
//<Icon name="rocket" size={30} color="#900" />;
