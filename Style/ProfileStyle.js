import {StyleSheet} from 'react-native';

const backGroundColor = 'slateblue';
const textColor = 'white';
const size = 100;
const elementSize = 130;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  headerRight: {
    color: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  headerIcon: {color: 'dodgerblue', fontSize: 17},
  topContainer: {
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'whitesmoke',
    paddingVertical: 10,
    paddingBottom: 20,
  },
  picContainer: {
    flexDirection: 'row',
    backgroundColor: backGroundColor,
    alignItems: 'center',
    justifyContent: 'center',
    width: size,
    height: size,
    borderRadius: 100,
    margin: 10,
  },
  picText: {
    color: textColor,
    fontSize: 40,
    marginHorizontal: 2,
  },
  userName: {
    fontSize: 25,
  },
  email: {marginTop: 8, fontSize: 18, color: 'gray'},

  //bottom container
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 30,
  },
  bottomContainerElements: {
    width: elementSize,
    height: elementSize,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 5,
    margin: 10,
  },
  bottomContainerElementContent: {
    color: 'black',
    opacity: 0.5,
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  verticalVIew: {backgroundColor: 'white', marginRight: 20},
});

export default styles;
