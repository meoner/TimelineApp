import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

const register_style = StyleSheet.create({
  firstContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  secondContainer: {
    flex: 2,
    backgroundColor: '#ffc000',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
});

const header_style = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  description: {},
});

export {register_style, header_style};
