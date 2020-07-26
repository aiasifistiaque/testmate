import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  logoContainer: {
    marginLeft: 5,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  haveAccountText: {fontSize: 15, marginTop: 20, color: 'steelblue'},
  logo: {fontSize: 30, color: 'slateblue'},
  logoSubtitle: {color: 'steelblue', fontSize: 10},
  registerButton: {
    margin: 20,
    marginHorizontal: 30,
    backgroundColor: 'slateblue',
  },
  bottomContainer: {
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: '100%',
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
  orText: {
    marginLeft: 5,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    paddingHorizontal: 20,
    borderColor: 'steelblue',
    marginVertical: 20,
    marginHorizontal: 70,
  },
});

export default styles;
