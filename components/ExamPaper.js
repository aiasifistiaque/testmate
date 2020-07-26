import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {RadioButton as Radio} from 'react-native-paper';
import {MainContainer} from '../Style';
import {useNavigation} from '@react-navigation/native';

const ExamPaper = () => {
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

  useEffect(() => {
    console.log('minute hook fired');
    if (minutes < 0) {
      navigation.replace('ResultComponent', {
        questions: questions,
        answer: answer,
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
      });

    let sec = 10;
    let min = 1;
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

  const submitButtonClicked = () => {
    console.log(answer);
    navigation.replace('ResultComponent', {
      questions: questions,
      answer: answer,
    });
  };

  return (
    <View style={MainContainer.container}>
      <View style={{marginVertical: 20}}>
        <Text>
          Exam: {subject} - {board} board, {year}
        </Text>
        <Text>
          time remaining {minutes}:{seconds}
        </Text>
      </View>
      {isLoading ? (
        <View style={{alignItems: 'center'}}>
          <View style={{marginVertical: 30}}>
            <Text>loading</Text>
          </View>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <ScrollView style={styles.scroll}>
          <View style={{marginVertical: 10, alignItems: 'center'}}>
            {questions.map((question, index) => (
              <View key={question._id} style={{marginVertical: 20}}>
                <View style={{flexDirection: 'row'}}>
                  <Text>{index + 1}: </Text>
                  <Text>{question.question}</Text>
                </View>

                <View style={{flexDirection: 'column', alignItems: 'center'}}>
                  <View style={{flexDirection: 'column'}}>
                    <Radio.Group
                      onValueChange={value => {
                        let newArray = [...answer];
                        newArray[index] = value;
                        setAnswer(newArray);
                      }}
                      value={answer[index]}
                    >
                      <View style={{flexDirection: 'row'}}>
                        <Radio.Item
                          value={question.optionone}
                          label={'(A)  ' + question.optionone}
                        />
                      </View>
                      <View style={{flexDirection: 'row'}}>
                        <Radio.Item
                          value={question.optiontwo}
                          label={'(B)  ' + question.optiontwo}
                        />
                      </View>
                      <View style={{flexDirection: 'row'}}>
                        <Radio.Item
                          value={question.optionthree}
                          label={'(C)  ' + question.optionthree}
                        />
                      </View>
                      <View style={{flexDirection: 'row'}}>
                        <Radio.Item
                          value={question.optionfour}
                          label={'(D)  ' + question.optionfour}
                        />
                      </View>
                    </Radio.Group>
                  </View>
                </View>
                <Text>correct is: {question.answer}</Text>
                <Text>answer is: {answer[index]}</Text>
              </View>
            ))}
          </View>
          <View style={{marginVertical: 10, alignItems: 'center'}}>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={submitButtonClicked}
            >
              <Text style={{color: 'white'}}>Submit Answers</Text>
            </TouchableOpacity>
          </View>
          <Text>----------</Text>
        </ScrollView>
      )}
      <Text>----------</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  submitButton: {
    backgroundColor: 'slateblue',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 100,
  },
  scroll: {
    padding: 20,
    width: '100%',
    flex: 1,
  },
});

export default ExamPaper;
