import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../Style/MenuPageStyle';
import {Icon} from 'native-base';
import {authLogout} from '../actions';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const MenuPageItems = ({title, logo}) => {
  const navigation = useNavigation();
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  const doStuffs = selectedTitle => {
    switch (selectedTitle) {
      case 'logout':
        if (auth.loggedIn == true) {
          dispatch(authLogout());
          console.log(`${selectedTitle} button pressed`);
        }
        navigation.navigate('startUpPage');
        break;
      case 'Profile':
        navigation.navigate('Profile');
        console.log(`${selectedTitle} button pressed`);
        break;
      case 'Settings':
        navigation.navigate('Home');
        break;
      default:
        console.log(`none`);
    }
  };

  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => doStuffs(title)}
    >
      <Icon name={logo} style={styles.itemLogo} />
      <Text style={styles.itemText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MenuPageItems;
