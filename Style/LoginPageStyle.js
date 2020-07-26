import {StyleSheet} from 'react-native';
import {colors} from './variables';

const styles = StyleSheet.create({
  downContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 40,
  },
  loginButton: {margin: 20, marginTop: 100, backgroundColor: colors.primary},
  logo: {fontSize: 50, color: colors.primary},
  orText: {marginVertical: 10, color: colors.successDark},
  andText: {marginTop: 14, marginHorizontal: 5},
  signupButton: {margin: 20, backgroundColor: colors.primary},
});

export default styles;
