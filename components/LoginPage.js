import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {Button as NbButton} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {color, direction, MainContainer} from '../Style';
import styles from '../Style/LoginPageStyle';

const LoginPage = () => {
  const navigation = useNavigation();
  return (
    <View style={MainContainer.container}>
      <Text style={styles.logo}>A.C.E</Text>
      <Text style={color.successDark}>by TestMate Tech ltd.</Text>

      <NbButton
        block
        style={styles.loginButton}
        onPress={() => navigation.navigate('login')}
      >
        <Text style={color.secondary}>log in</Text>
      </NbButton>
      <Text style={styles.orText}>or,</Text>
      <Button
        style={{margin: 20}}
        title="login as guest"
        onPress={() => navigation.navigate('Home')}
      />

      <View style={{marginTop: 30}}>
        <Text style={color.successDark}>do not have an account?</Text>
      </View>
      <NbButton
        block
        style={styles.signupButton}
        onPress={() => navigation.navigate('signup')}
      >
        <Text style={color.secondary}>Sign Up</Text>
      </NbButton>
      <View style={styles.downContainer}>
        <Text>by signing up you agree to our</Text>
        <View style={direction.row}>
          <NbButton transparent>
            <Text style={color.link}>Terms</Text>
          </NbButton>
          <Text style={styles.andText}>&</Text>
          <NbButton transparent>
            <Text style={color.link}>Privacy Policy</Text>
          </NbButton>
        </View>
      </View>
    </View>
  );
};

export default LoginPage;
