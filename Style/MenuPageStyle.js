import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: 'white',
  },
  header: {marginLeft: 18, marginTop: 20, marginBottom: 20},
  headerText: {fontSize: 30, fontWeight: 'bold'},
  itemContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  separator: {
    borderColor: 'lavender',
    opacity: 1,
    borderBottomWidth: 1,
    marginVertical: 14,
    marginRight: 30,
    marginLeft: 56,
  },
  itemLogo: {
    paddingHorizontal: 18,
    fontSize: 30,
    color: 'slateblue',
  },
  itemText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default styles;
