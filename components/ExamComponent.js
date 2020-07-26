/** @format */

import { View, Text, Button, ActivityIndicator } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import React, { useState } from 'react';
import { Picker } from 'native-base';
import { useSelector } from 'react-redux';
import styles from '../Style/ExamComponentStyle';

const ExamComponent = ({ navigation }) => {
  const [examType, setExamType] = useState('SSC');
  const [selectedValue, setSelectedValue] = useState('');
  const [year, setYear] = useState('0000');
  const host = useSelector(state => state.host);
  const [isLoading, setIsLoading] = useState();
  const [exams, setExams] = useState([]);

  const searchButton = () => {
    setIsLoading(true);
    loadExams();
  };

  const loadExams = () => {
    fetch(host + 'api/question/' + selectedValue + '/' + year)
      .then(res => res.json())
      .then(res => {
        if (res == '') {
          console.log('no res found');
          setExams(<Text>'no results found'</Text>);
        } else {
          console.log('no res: ' + res);
          setExams(
            res.map((exam, index) => (
              <View key={index} style={styles.selectExamButton}>
                <Text style={{ color: 'gray' }}>{exam}</Text>
                <Button
                  title='give exam'
                  onPress={() => navigation.navigate({ name: 'SolveExam' })}
                />
              </View>
            ))
          );
        }
        setIsLoading(false);
      })
      .catch(() => {});
  };

  return (
    <View style={styles.main}>
      <View style={styles.topContainer}>
        <Text style={{ fontSize: 25 }}>Prepare for {examType}</Text>
        <View style={styles.picker}>
          <Text style={{ marginRight: 10 }}>Select a board: </Text>

          <Picker
            mode='dropdown'
            style={{ width: 100 }}
            placeholder='select board'
            selectedValue={selectedValue}
            onValueChange={itemValue => setSelectedValue(itemValue)}>
            <Picker.Item label='' value='' />
            <Picker.Item label='Cumilla' value='cumilla' />
            <Picker.Item label='Dhaka' value='dhaka' />
          </Picker>
        </View>
        <View style={styles.picker}>
          <Text style={{ marginRight: 10 }}>Select a year: </Text>

          <Picker
            mode='dropdown'
            placeholder='select year'
            selectedValue={year}
            onValueChange={yearValue => setYear(yearValue)}>
            <Picker.Item label='' value='' />
            <Picker.Item label='2014' value='2014' />
            <Picker.Item label='2015' value='2015' />
          </Picker>
        </View>

        <TouchableOpacity onPress={searchButton} style={styles.searchButton}>
          <Text style={{ color: 'whitesmoke' }}>Search</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        <ScrollView>
          {isLoading ? (
            <View style={{ alignItems: 'center' }}>
              <Text>loading</Text>
              <ActivityIndicator size='large' color='#0000ff' />
            </View>
          ) : (
            exams
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default ExamComponent;
