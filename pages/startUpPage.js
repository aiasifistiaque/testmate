import React from 'react';
import LoginPage from '../components/LoginPage';
import {useSelector} from 'react-redux';

const startUpPage = ({navigation}) => {
  const isLogged = useSelector(state => state.auth.loggedIn);
  React.useEffect(() => {
    if (isLogged) {
      navigation.navigate('Home');
    }
  }, [isLogged]);
  return <LoginPage />;
};

export default startUpPage;
