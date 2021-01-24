import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

const register_style = StyleSheet.create({
  firstContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  secondContainer: {
    flex: 3,
    backgroundColor: '#ffc000',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
});

const header_style = StyleSheet.create({
  container: {
    flex: 1,
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

const inputarea_style = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  input: {
    marginTop: 40,
    borderBottomWidth: 1,
    width: deviceSize.width * 0.6,
  },
});

const button_style = StyleSheet.create({
  container: {
    alignSelf: 'flex-end',
    margin: 50,
    justifyContent: 'center',
    borderRadius: 10,
    width: deviceSize.width * 0.2,
    height: deviceSize.height * 0.06,
    backgroundColor: '#ec3e3e',
  },
});

export {register_style, header_style, inputarea_style, button_style};
