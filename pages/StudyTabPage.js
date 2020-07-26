import React from 'react';
import {View, Text} from 'react-native';
import styles from '../Style/StudyTabPageStyle';
import {ScrollView} from 'react-native-gesture-handler';
import StudyComponent from '../components/StudyComponent';

const StudyTabPage = () => {
  return (
    <View style={styles.maincontainer}>
      <ScrollView>
        <StudyComponent exam="S.S.C" />
        <StudyComponent exam="H.S.C" />
        <StudyComponent exam="Job" />
      </ScrollView>
    </View>
  );
};

export default StudyTabPage;
