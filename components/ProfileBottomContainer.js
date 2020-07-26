import React from 'react';
import {View, Text} from 'react-native';
import styles from '../Style/ProfileStyle';
import {TouchableOpacity} from 'react-native-gesture-handler';

const BottomContainer = props => {
  return (
    <View style={styles.bottomContainer}>
      <View style={styles.verticalVIew}>
        <TouchableOpacity style={styles.bottomContainerElements}>
          <Text style={styles.bottomContainerElementContent}>Exams</Text>
          <Text style={styles.bottomContainerElementContent}>132</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomContainerElements}>
          <Text style={styles.bottomContainerElementContent}>
            Questions Solved
          </Text>
          <Text style={styles.bottomContainerElementContent}>1032</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.verticalVIew}>
        <TouchableOpacity style={styles.bottomContainerElements}>
          <Text style={styles.bottomContainerElementContent}>Correct</Text>
          <Text style={styles.bottomContainerElementContent}>454</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomContainerElements}>
          <Text style={styles.bottomContainerElementContent}>Incorrect</Text>
          <Text style={styles.bottomContainerElementContent}>578</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.verticalVIew}>
        <TouchableOpacity style={styles.bottomContainerElements}>
          <Text style={styles.bottomContainerElementContent}>Saved Items</Text>
          <Text style={styles.bottomContainerElementContent}>45</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomContainerElements}>
          <Text style={styles.bottomContainerElementContent}>
            Marked important
          </Text>
          <Text style={styles.bottomContainerElementContent}>23</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.verticalVIew}>
        <TouchableOpacity style={styles.bottomContainerElements}>
          <Text style={styles.bottomContainerElementContent}>todo list</Text>
          <Text style={styles.bottomContainerElementContent}>5</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.bottomContainerElements}>
          <Text style={styles.bottomContainerElementContent}>
            Questions Solved
          </Text>
          <Text style={styles.bottomContainerElementContent}>1032</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default BottomContainer;
