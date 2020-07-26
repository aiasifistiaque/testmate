import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'black',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  orText: {
    marginVertical: 10,
    fontSize: 18,
    marginBottom: 30,
  },
  signUpButton: {
    paddingHorizontal: 20,
    borderColor: 'slateblue',
  },
  loginButton: {
    margin: 20,
    marginHorizontal: 30,
    backgroundColor: 'slateblue',
  },
  input: {
    height: 40,
    color: 'darkslateblue',
    borderColor: 'darkslategray',
    borderBottomWidth: 1,
    width: '80%',
    margin: 10,
    paddingHorizontal: 3,
  },
  forgotPassword: {
    marginVertical: 20,
    color: 'dodgerblue',
    fontSize: 15,
    textDecorationLine: 'underline',
  },
  logInToAce: {
    marginTop: 40,
    marginBottom: 20,
    fontSize: 25,
    color: 'slateblue',
  },
  alert: {
    color: 'crimson',
    textDecorationLine: 'underline',
  },
});

export default styles;
