/** @format */

import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import styles from '../Style/HomeStyle';

const AceHome = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      {/* <Button
        title="log out"
        onPress={() => {
          dispatch(authLogout());
          if (auth.loggedIn == false) {
            navigation.navigate('startUpPage');
          }
        }}
      /> */}
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>A.C.E</Text>
        <Text style={styles.logoSubtitle}>by TestMate tech</Text>
      </View>

      <ScrollView style={styles.scroll}>
        <View style={styles.rowView}>
          <TouchableOpacity
            style={styles.buttonPrimary}
            onPress={() =>
              navigation.navigate('ExamComponent', { examType: 'SSC' })
            }>
            <Text style={styles.textWhite}>Prepare for SSC</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonPrimary}
            onPress={() => {
              console.log('crash button pressed');
              navigation.navigate('RandomQuestions');
            }}>
            <Text style={styles.textWhite}>Solve Random Questions</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.rowView}>
          <TouchableOpacity
            style={styles.buttonPrimary}
            onPress={() => navigation.navigate('Profile')}>
            <Text style={styles.textWhite}>View Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonPrimary}
            // onPress={() =>
            //   navigation.navigate('ExamComponent', {examType: 'HSC'})
            // }
          >
            <Text style={styles.textWhite}>Prepare for HSC</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowView}>
          <TouchableOpacity
            style={styles.buttonPrimary}
            // onPress={() =>
            //   navigation.navigate('ExamComponent', {examType: 'job'})
            // }
          >
            <Text style={styles.textWhite}>Prepare for job</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default AceHome;
