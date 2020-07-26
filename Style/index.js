import {StyleSheet} from 'react-native';

export const MainContainer = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

export const color = StyleSheet.create({
  primary: {color: 'slateblue'},
  primaryDark: {color: 'darkslateblue'},
  secondary: {color: 'whitesmoke'},
  danger: {color: 'tomato'},
  dangerDark: {color: 'crimson'},
  button: {color: 'whitesmoke'},
  buttonReverse: {color: 'slateblue'},
  white: {color: 'white'},
  success: {color: 'seagreen'},
  successDark: {color: 'teal'},
  background: {color: 'white'},
  link: {color: 'blue'},
});

export const direction = StyleSheet.create({
  row: {flexDirection: 'row'},
  column: {flexDirection: 'column'},
});

export const text = StyleSheet.create({
  bold20: {fontSize: 20, fontWeight: 'bold'},
  bold20underlined: {
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
