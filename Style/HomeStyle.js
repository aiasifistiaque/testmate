import {StyleSheet} from 'react-native';

//button
const primary = 'whitesmoke';
//background
const secondary = 'steelblue';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    marginVertical: 10,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
    width: '100%',
  },
  logo: {
    fontSize: 30,
    color: 'slateblue',
  },
  logoSubtitle: {
    color: 'teal',
    fontSize: 10,
  },
  contentCenter: {
    alignItems: 'center',
  },
  rowView: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scroll: {flex: 1, width: '100%'},
  buttonPrimary: {
    backgroundColor: secondary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    width: 150,
    height: 150,
    margin: 10,
    padding: 10,
  },
  buttonDanger: {
    backgroundColor: 'red',
    alignItems: 'center',
    padding: 20,
    width: 200,
    margin: 10,
  },
  buttonSuccess: {
    backgroundColor: 'green',
    alignItems: 'center',
    padding: 20,
    width: 200,
    margin: 10,
  },
  textWhite: {
    color: primary,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
  },
});

export default styles;
