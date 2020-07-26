//need to rewrite the link

import React, {useState, useEffect} from 'react';
import {View, Text, Button, ActivityIndicator, StyleSheet} from 'react-native';
import {Picker} from 'native-base';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
//import * as Font from 'expo-font';

const ExamComponent = ({route, navigation}) => {
  const {examType} = route.params;
  const [selectedValue, setSelectedValue] = useState('');
  const [year, setYear] = useState('0000');
  const host = useSelector(state => state.host);
  const [isLoading, setIsLoading] = useState();
  const [exams, setExams] = useState([]);

  const searchButton = () => {
    setIsLoading(true);
    loadExams();
  };

  // useEffect(() => {
  //   console.log('crashed');
  //   loadExams();
  //   console.log('crashed after loading');
  // }, []);

  const loadExams = () => {
    console.log('log 1');
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
              <TouchableOpacity
                key={index}
                onPress={() => navigation.navigate({name: 'SolveExam'})}
                style={styles.selectExamButton}
              >
                <Text style={{color: 'white'}}>{exam}</Text>
              </TouchableOpacity>
            ))
          );
        }
        setIsLoading(false);
      })
      .catch(() => {});
  };

  return (
    <View style={styles.main}>
      <View style={{margin: 30}}>
        <Text>Prepare for {examType}</Text>

        <Text>Picked value is {selectedValue}</Text>
        <Text>Year is: {year}</Text>
      </View>
      <View style={{margin: 20, flexDirection: ''}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{marginTop: 20, marginRight: 10}}>Select a board: </Text>

          {/* <Picker
            mode="dropdown"
            style={{width: 100}}
            placeholder="Board:"
            selectedValue={selectedValue}
            onValueChange={itemValue => setSelectedValue(itemValue)}
          >
            <Picker.Item label="Cumilla" value="cumilla" />
          </Picker>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{marginTop: 20, marginRight: 10}}>Select a year: </Text>

          <Picker
            mode="dropdown"
            placeholder="year: "
            selectedValue={year}
            onValueChange={yearValue => setYear(yearValue)}
          >
            <Picker.Item label="2014" value="2014" />
          </Picker> */}
        </View>
        <View style={{marginHorizontal: 10, padding: 20}}>
          <Button title="search" onPress={searchButton} />
        </View>
      </View>
      <ScrollView style={{marginVertical: 20, width: '80%'}}>
        {isLoading ? (
          <View style={{alignItems: 'center'}}>
            <View style={{margin: 30}}>
              <Text>loading</Text>
            </View>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        ) : (
          exams
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  selectExamButton: {
    margin: 20,
    borderWidth: 1,
    padding: 18,
    borderRadius: 10,
    backgroundColor: 'slateblue',
    alignItems: 'center',
  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
});

export default ExamComponent;
