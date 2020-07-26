import React, {useState, useEffect} from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {RadioButton as Radio} from 'react-native-paper';
import SingleResult from './SingleResult';
import {useDispatch} from 'react-redux';
import {ResetPracticeScore} from '../actions';
import {color, direction, text} from '../Style';
import styles from '../Style/RandomQuestionsStyle';

const RandomQuestions = () => {
  const host = useSelector(state => state.host);
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const marks = useSelector(state => state.practiceScore);
  const [answer, setAnswer] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ResetPracticeScore());
  }, []);

  const questionElement = () => {
    return (
      <View>
        {questions.map((question, index) => (
          <View style={{alignItems: 'center'}} key={question._id}>
            <Text style={text.bold20}>Q: {question.question}</Text>
            <Radio.Group
              onValueChange={value => {
                let newArray = [...answer];
                newArray[index] = value;
                setAnswer(newArray);
              }}
              value={answer[index]}
            >
              <View style={direction.row}>
                <Radio.Item
                  value={question.optionone}
                  label={`(A) ${question.optionone}`}
                />
              </View>
              <View style={direction.row}>
                <Radio.Item
                  value={question.optiontwo}
                  label={`(B) ${question.optiontwo}`}
                />
              </View>
              <View style={direction.row}>
                <Radio.Item
                  value={question.optionthree}
                  label={`(C) ${question.optionthree}`}
                />
              </View>
              <View style={direction.row}>
                <Radio.Item
                  value={question.optionfour}
                  label={`(D) ${question.optionfour}`}
                />
              </View>
            </Radio.Group>
          </View>
        ))}
      </View>
    );
  };

  useEffect(() => {
    setIsLoading(true);
    loadQuestions();
    return () => {
      setQuestions([]);
      setIsLoading(true);
    };
  }, []);

  const loadQuestions = () => {
    setIsLoading(true);
    setSubmitted(false);
    fetch(host + 'api/question/practice/bengali second paper')
      .then(res => res.json())
      .then(res => {
        setQuestions(res);
        setIsLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <View style={{marginVertical: 20}}>
        <Text style={[text.bold20underlined, color.dangerDark]}>
          Session Marks: {marks.score}/{marks.total}
        </Text>
      </View>
      <ScrollView style={{padding: 20}}>
        {submitted ? (
          <SingleResult answer={answer} questions={questions} />
        ) : isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          questionElement()
        )}
      </ScrollView>
      <View>
        {submitted ? (
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={styles.nextButton}>
              <Text style={color.secondary}>Save Question</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={loadQuestions}
              style={[styles.nextButton, {backgroundColor: 'teal'}]}
            >
              <Text style={color.secondary}>Next Question</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            onPress={() => setSubmitted(true)}
            style={styles.submitButton}
          >
            <Text style={color.secondary}>Submit Answer</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default RandomQuestions;
