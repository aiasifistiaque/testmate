import React from 'react';
import {useSelector} from 'react-redux';
import Login from '../components/Login';

const loginPage = ({navigation}) => {
  const isLogged = useSelector(state => state.auth.loggedIn);
  React.useEffect(() => {
    if (isLogged) {
      navigation.navigate('Home');
    }
  }, [isLogged]);
  return <Login />;
};

export default loginPage;
