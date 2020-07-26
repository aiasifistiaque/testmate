/** @format */

import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { MainContainer } from '../Style';
import ViewScriptComponent from './ViewScriptComponent';
import { useDispatch } from 'react-redux';
import { IncreasePracticeScore, DecreasePracticeScore } from '../actions';

const SingleResult = props => {
  const dispatch = useDispatch();
  const answer = props.answer;
  const questions = props.questions;
  const [correct, setCorrect] = useState(0);
  const [total, setTotal] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [skipped, setSkipped] = useState(0);

  useEffect(() => {
    setTotal(questions.length);
    let index = 0;
    let bhul = 0;
    let corr = 0;
    let skip = 0;

    for (index = 0; index < questions.length; index = index + 1) {
      if (answer[index] != null) {
        if (questions[index].answer == answer[index]) {
          corr = corr + 1;
          dispatch(IncreasePracticeScore());
        } else {
          bhul = bhul + 1;
          dispatch(DecreasePracticeScore());
        }
      } else {
        skip = skip + 1;
      }
    }

    setCorrect(corr);
    setSkipped(skip);
    setWrong(bhul);
  }, []);

  return (
    <View style={MainContainer.container}>
      <View style={{ borderColor: 'black', padding: 20 }}>
        <Text>
          Score: {correct}/{total}
        </Text>
        <Text>skipped: {skipped}</Text>
        <Text>wrong: {wrong}</Text>
      </View>
      <ScrollView>
        {/* {questions.map((question, index) => (
          <View key={question._id} style={{marginVertical: 20}}>
            <Text>
              answer {index}: {question.answer}
            </Text>
            <Text>given answer: {answer[index]}</Text>
          </View>
        ))} */}
        <ViewScriptComponent questions={questions} answer={answer} />
      </ScrollView>
    </View>
  );
};

export default SingleResult;
