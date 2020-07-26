import React from 'react';
import {View, Text} from 'react-native';
import styles from '../Style/StudyTabPageStyle';
import {Icon} from 'native-base';
import {color, text} from '../Style/index';
import {TouchableOpacity} from 'react-native-gesture-handler';

const StudyComponent = props => {
  return (
    <View style={{margin: 10}}>
      <Text
        style={[
          text.bold20,
          color.primaryDark,
          {marginLeft: 28, marginBottom: 10},
        ]}
      >
        Prepare for {props.exam}
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.optionTabs}>
          <Text style={styles.buttonText}>Study</Text>
          <Icon name="ios-book" style={styles.buttonIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionTabs}>
          <Text style={styles.buttonText}>Practice</Text>
          <Icon name="md-clipboard" style={styles.buttonIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StudyComponent;
