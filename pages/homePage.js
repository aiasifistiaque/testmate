import React from 'react';
import AceHome from '../components/AceHome';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const homePage = () => {
  const navigation = useNavigation();
  const isLogged = useSelector(state => state.auth.loggedIn);
  React.useEffect(() => {
    if (isLogged) {
      navigation.navigate('ACEHome');
    }
  }, [isLogged]);
  return <AceHome />;
};

export default homePage;
