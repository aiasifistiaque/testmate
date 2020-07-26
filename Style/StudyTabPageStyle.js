import {StyleSheet} from 'react-native';
import {MainContainer} from './';

//primary used for button background
//secondary used for button text
const primary = 'white';
const secondary = 'slateblue';
const third = 'white';

const styles = StyleSheet.create({
  optionTabs: {
    backgroundColor: primary,
    width: 130,
    height: 130,
    borderRadius: 5,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: third,
    borderWidth: 1,
    elevation: 2,
  },
  maincontainer: {
    padding: 10,
    flex: 1,
  },
  titleContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIcon: {
    fontSize: 50,
    color: secondary,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 15,
    color: secondary,
  },
});

export default styles;
