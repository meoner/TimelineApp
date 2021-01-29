import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

const post_item_styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginLeft: 5,
  },

  itemTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
    paddingHorizontal: 5,
  },
  itemText: {
    marginHorizontal: 5,
    borderWidth: 2,
    borderColor: 'rgba(0,0,0, 0.5)',
    paddingHorizontal: 5,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    padding: 5,
  },
  itemFavorite: {
    flex: 1,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mail: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  time: {
    textAlign: 'center',
    fontSize: 14,
  },
  text: {
    fontSize: 18,
  },
});

const header = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#ffeadb',
  },
  favoriteButton: {},
});

const text_area = StyleSheet.create({
  inputContainer: {
    borderWidth: 2,
    borderRadius: 5,
    height: 40,
    backgroundColor: 'white',
    borderColor: '#ffc478',
  },
  input: {
    marginLeft: 10,
    width: deviceSize.width * 0.8,
  },
});

export {post_item_styles, header, text_area};

/* */
