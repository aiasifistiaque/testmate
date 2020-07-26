import {StyleSheet} from 'react-native';
import {colors} from './variables';

const styles = StyleSheet.create({
  nextButton: {
    backgroundColor: 'blue',
    width: '100%',
    padding: 10,
    paddingHorizontal: 100,
    marginVertical: 20,
    marginBottom: 50,
    alignItems: 'center',
  },
  nextButton: {
    width: 120,
    height: 40,
    backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 40,
  },
  submitButton: {
    backgroundColor: colors.primary,
    borderRadius: 5,
    marginBottom: 100,
    width: '100%',
    padding: 15,
    paddingHorizontal: 120,
    marginVertical: 20,
    alignItems: 'center',
  },
  container: {
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
