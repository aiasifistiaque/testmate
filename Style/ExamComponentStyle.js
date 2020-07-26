import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  selectExamButton: {
    borderWidth: 1,
    padding: 40,
    borderRadius: 5,
    borderColor: 'gray',
    alignItems: 'center',
  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  topContainer: {
    backgroundColor: 'whitesmoke',
    paddingHorizontal: 10,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flex: 1,
  },
  bottomContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flex: 1.2,
  },
  picker: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchButton: {
    backgroundColor: 'slateblue',
    width: '80%',
    paddingHorizontal: 100,
    alignItems: 'center',
    padding: 14,
    borderRadius: 5,
    marginTop: 15,
  },
});

export default styles;
