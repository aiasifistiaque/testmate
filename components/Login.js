import React, {useState} from 'react';
import {View, Text, TextInput, ActivityIndicator} from 'react-native';
import {Button as NbButton, Text as NbText} from 'native-base';
import {useSelector, useDispatch} from 'react-redux';
import {authLogin} from '../actions';
import {useNavigation} from '@react-navigation/native';
import {color} from '../Style';
import styles from '../Style/LoginStyle';

const Login = () => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState('');
  const [user, setUser] = useState('');
  const [token, setToken] = useState();
  const [password, setPassword] = useState('');
  const host = useSelector(state => state.host);
  const dispatch = useDispatch();
  const [loginButtonPressed, setLoginButtonPressed] = useState(false);
  const [invalid, setInvalid] = useState(false);

  const fetchToken = () => {
    setLoginButtonPressed(true);
    setInvalid(false);
    console.log('i am starting to fetch the token');
    console.log(userName);
    console.log(password);
    fetch(host + 'auth/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: userName,
        password: password,
      }),
    })
      .then(res => res.json())
      .then(res => {
        setUser(res.user.email);
        setToken(res.token);
        dispatch(authLogin(res.token, res.user));
        console.log(`username: ${user}, token: ${token}`);
        setLoginButtonPressed(false);
      })
      .catch(err => {
        console.log('error');
        console.log(err);
        setLoginButtonPressed(false);
        setInvalid(true);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logInToAce}>Login to A.C.E</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => {
          setUserName(text);
          setInvalid(false);
        }}
        placeholder={'username'}
      />
      <TextInput
        style={styles.input}
        onChangeText={text => {
          setPassword(text);
          setInvalid(false);
        }}
        placeholder="password"
        secureTextEntry={true}
      />
      {invalid ? (
        <Text style={styles.alert}>*invalid username/password</Text>
      ) : null}
      <NbButton block onPress={fetchToken} style={styles.loginButton}>
        {!loginButtonPressed ? (
          <Text style={color.button}>login</Text>
        ) : (
          <ActivityIndicator size="small" color="white" />
        )}
      </NbButton>

      <Text style={styles.orText}>------------- or -------------</Text>
      <Text>user: {user}</Text>

      <NbButton
        bordered
        style={styles.signUpButton}
        onPress={() => navigation.navigate('signup')}
      >
        <NbText style={color.primary}>Create New Account</NbText>
      </NbButton>
      <Text style={styles.forgotPassword}>Forgot Password?</Text>
    </View>
  );
};

export default Login;
