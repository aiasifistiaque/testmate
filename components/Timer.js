import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'native-base';

const Timer = props => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Icon style={styles.timerIcon} name="md-time" />
      <Text style={styles.timerText}>
        {props.minutes}:{props.seconds}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  timerIcon: {
    color: 'tomato',
    marginLeft: 5,
    fontSize: 15,
    fontWeight: 'bold',
  },
  timerText: {
    color: 'tomato',
    marginLeft: 5,
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default Timer;
