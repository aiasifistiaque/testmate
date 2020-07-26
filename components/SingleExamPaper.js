/** @format */

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Button
} from 'react-native';
import { useSelector } from 'react-redux';
import { Picker, Icon, Button as NbButton } from 'native-base';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { RadioButton as Radio } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { color } from '../Style';
import styles from '../Style/SIngleExamPaperStyle';
import Timer from './Timer';

const SingleExamPaper = () => {
  const [board, setBoard] = useState('cumilla');
  const [year, setYear] = useState('2014');
  const [subject, setSubject] = useState('bengali second paper');
  const [questions, setQuestions] = useState([]);
  const host = useSelector(state => state.host);
  const [isLoading, setIsLoading] = useState(true);
  const [answer, setAnswer] = useState([]);
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
  const navigation = useNavigation();
  const [qIndex, setQIndex] = useState(0);
  const [length, setLength] = useState();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.timerContainer}>
          <Timer minutes={minutes} seconds={seconds} />
        </View>
      )
    });
  }, [seconds, minutes]);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <NbButton transparent onPress={() => navigation.navigate('Home')}>
          <Icon name='ios-close' style={styles.haederCloseButton} />
        </NbButton>
      )
    });
  }, []);

  useEffect(() => {
    console.log('minute hook fired');
    if (minutes < 0) {
      navigation.replace('ResultComponent', {
        questions: questions,
        answer: answer
      });
    }
    return () => {};
  }, [minutes]);

  useEffect(() => {
    fetch(host + 'api/question/' + board + '/' + year + '/' + subject)
      .then(res => res.json())
      .then(res => {
        setQuestions(res);
        setIsLoading(false);
        setLength(res.length);
      });

    let sec = 60;
    let min = 30;
    const clock = () => {
      console.log(`questions: ${questions}`);
      if (min < 0) {
        clearInterval(interval);
      } else {
        if (sec > 0) {
          sec = sec - 1;
        } else {
          min = min - 1;
          sec = 10;
        }
        setSeconds(sec);
        setMinutes(min);
      }
    };
    let interval = setInterval(clock, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const itemColor = () => {
    let color = 'red';
    if (answer[qIndex] != null) {
      color = 'green';
    }
    return StyleSheet.create({
      item: {
        color: color
      }
    });
  };

  const submitButtonClicked = () => {
    console.log(answer);
    navigation.replace('ResultComponent', {
      questions: questions,
      answer: answer
    });
  };

  return (
    <View style={styles.containerTop}>
      <View>
        <View>
          <Text style={styles.examTitle}>
            Exam: {subject} - {board} board, {year}
          </Text>
        </View>
      </View>
      <View style={styles.pickerContainer}>
        <Text style={styles.pickerRightText}>Jump to:</Text>

        <View style={{ flexDirection: 'row' }}>
          <Picker
            mode='dropdown'
            placeholder='select question'
            style={{ width: 150 }}
            textStyle={color.primaryDark}
            iosIcon={<Icon name='ios-arrow-down' style={styles.pickerArrow} />}
            selectedValue={qIndex}
            onValueChange={itemValue => setQIndex(itemValue)}>
            {questions.map((question, index) => (
              <Picker.Item
                textStyle={itemColor().item}
                key={index}
                label={`Question no. ${index + 1}`}
                value={index}
              />
            ))}
          </Picker>
        </View>
      </View>
      {isLoading ? (
        <View style={{ alignItems: 'center' }}>
          <View style={{ marginVertical: 30 }}>
            <Text>loading</Text>
          </View>
          <ActivityIndicator size='large' color='#0000ff' />
        </View>
      ) : (
        <View style={styles.elseView}>
          <ScrollView style={styles.scroll}>
            <View key={qIndex}>
              <View style={styles.questionContainer}>
                <Text style={styles.questionIndex}>{qIndex + 1}: </Text>
                <Text style={styles.question}>
                  {questions[qIndex].question}
                </Text>
              </View>

              <View style={styles.optionContainer}>
                <View style={{ flexDirection: 'column' }}>
                  <Radio.Group
                    onValueChange={value => {
                      let newArray = [...answer];
                      newArray[qIndex] = value;
                      setAnswer(newArray);
                    }}
                    value={answer[qIndex]}>
                    <View style={styles.options}>
                      <Radio.Item
                        value={questions[qIndex].optionone}
                        label={'(A)  ' + questions[qIndex].optionone}
                      />
                    </View>
                    <View style={styles.options}>
                      <Radio.Item
                        value={questions[qIndex].optiontwo}
                        label={'(B)  ' + questions[qIndex].optiontwo}
                      />
                    </View>
                    <View style={styles.options}>
                      <Radio.Item
                        value={questions[qIndex].optionthree}
                        label={'(C)  ' + questions[qIndex].optionthree}
                      />
                    </View>
                    <View style={styles.options}>
                      <Radio.Item
                        value={questions[qIndex].optionfour}
                        label={'(D)  ' + questions[qIndex].optionfour}
                      />
                    </View>
                  </Radio.Group>
                </View>
              </View>
            </View>
          </ScrollView>
          <View style={styles.allButtons}>
            <View style={styles.directionButtons}>
              <NbButton
                transparent
                style={styles.prevButton}
                onPress={() => {
                  if (qIndex > 0) {
                    setQIndex(qIndex => qIndex - 1);
                  }
                }}>
                <Icon style={color.danger} name='ios-arrow-back' />
                <Text style={color.danger}>Prev</Text>
              </NbButton>
              <NbButton
                transparent
                style={styles.nextButton}
                onPress={() => {
                  console.log(length);
                  if (qIndex < length - 1) {
                    setQIndex(qIndex => qIndex + 1);
                  }
                }}>
                <Text style={color.success}>Next</Text>
                <Icon style={color.success} name='ios-arrow-forward' />
              </NbButton>
            </View>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={submitButtonClicked}>
              <Text style={color.secondary}>Submit Answers</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default SingleExamPaper;
