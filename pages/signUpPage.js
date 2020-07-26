import React from 'react';
import Signup from '../components/signup';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const signUpPage = () => {
  const navigation = useNavigation();
  const isLogged = useSelector(state => state.auth.loggedIn);
  React.useEffect(() => {
    if (isLogged) {
      navigation.navigate('Home');
    }
  }, [isLogged]);
  return <Signup />;
};

export default signUpPage;
