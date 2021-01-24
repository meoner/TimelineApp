import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

const inputarea_style = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  input: {
    marginTop: 40,
    borderBottomWidth: 1,
    width: deviceSize.width * 0.7,
    fontSize: 16,
  },
});

const button_style = StyleSheet.create({
  container: {
    alignSelf: 'flex-end',
    margin: 50,
    justifyContent: 'center',
    borderRadius: 10,
    width: deviceSize.width * 0.25,
    height: deviceSize.height * 0.08,
    backgroundColor: '#ec3e3e',
  },
});

export {inputarea_style, button_style};
