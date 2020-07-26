import React, {useState} from 'react';
import {View, Text, TextInput, ActivityIndicator} from 'react-native';
import {Button as NbButton} from 'native-base';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {color} from '../Style';
import styles from '../Style/signupStyle';

const signup = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const host = useSelector(state => state.host);
  const [signUpButtonPressed, setSignUpButtonPressed] = useState(false);

  const register = () => {
    setSignUpButtonPressed(true);
    fetch(host + 'auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        firstname: firstName,
        lastname: lastName,
        //phone:this.user.phone,
        email: email,
        password: password,
      }),
    })
      .then(res => {
        navigation.navigate('login');
        console.log('success');
        res.json();
        setSignUpButtonPressed(true);
      })
      .catch(err => {
        console.log(err);
        setSignUpButtonPressed(false);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>A.C.E</Text>
        <Text style={styles.logoSubtitle}>by TestMate Tech ltd.</Text>
      </View>
      <TextInput
        style={styles.input}
        value={firstName}
        onChangeText={text => setFirstName(text)}
        placeholder={'First Name'}
      />
      <TextInput
        style={styles.input}
        value={lastName}
        onChangeText={text => setLastName(text)}
        placeholder={'Last Name'}
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder={'Emain'}
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={text => setPassword(text)}
        placeholder={'Password'}
        secureTextEntry={true}
      />
      <NbButton
        block
        style={styles.registerButton}
        onPress={() => {
          console.log(`first name: ${firstName}`);
          console.log(`last name: ${lastName}`);
          console.log(`email: ${email}`);
          console.log(`password is ${password}`);
          register();
        }}
      >
        {!signUpButtonPressed ? (
          <Text style={color.secondary}>Register</Text>
        ) : (
          <ActivityIndicator size="small" color="white" />
        )}
      </NbButton>
      <Text style={styles.orText}>
        --------------------- or ---------------------
      </Text>
      <View style={styles.bottomContainer}>
        <Text style={styles.haveAccountText}>Already have an account?</Text>
        <NbButton
          rounded
          block
          bordered
          style={styles.loginButton}
          onPress={() => navigation.navigate('login')}
        >
          <Text style={color.primary}>Login</Text>
        </NbButton>
      </View>
    </View>
  );
};

export default signup;
