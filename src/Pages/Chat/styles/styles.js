import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

const post_item_styles = StyleSheet.create({
  container: {},
  itemTitle: {
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 5,
  },
  itemText: {
    marginHorizontal: 20,
    borderWidth: 1,
    marginBottom: 25,
  },
  itemFavorite: {},
  mail: {
    fontSize: 16,
    textAlign: 'center',
  },
  time: {
    textAlign: 'center',
    fontSize: 14,
  },
  text: {},
});

const header = StyleSheet.create({
  container: {},
  favoriteButton: {},
});

export {post_item_styles};

/* */
