import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ViewScriptComponent = props => {
  const questions = props.questions;
  const answer = props.answer;
  const [colorArray, setColorArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let length = questions.length;
    let index = 0;
    console.log(answer);
    let tempArr = [...colorArray];
    for (index = 0; index < length; index = index + 1) {
      if (answer[index] != null) {
        if (questions[index].answer == answer[index]) {
          tempArr[index] = 'green';
        } else {
          tempArr[index] = 'red';
        }
      } else {
        tempArr[index] = 'yellow';
      }
      console.log(colorArray);
    }
    setColorArray(tempArr);
    setIsLoading(false);
  }, []);

  const optionColor = (index, option) => {
    let labelColor = 'black';
    let textDecorationLine = 'black';
    let textColor = 'black';

    if (questions[index].answer == option) {
      labelColor = 'green';
      textColor = 'green';
      textDecorationLine = 'none';
    } else if (questions[index].answer != option && answer[index] == option) {
      labelColor = 'red';
      textDecorationLine = 'line-through';
      textColor = 'red';
    } else {
      labelColor = 'white';
      textColor = 'black';
      textDecorationLine = 'none';
    }

    return StyleSheet.create({
      label: {
        backgroundColor: labelColor,
        borderWidth: 1,
        borderRadius: 10,
        padding: 3,
        marginRight: 10,
      },
      text: {
        color: textColor,
        textDecorationLine: textDecorationLine,
      },
    });
  };

  return (
    <View style={{padding: 20}}>
      {questions.map((question, index) => (
        <View
          key={question._id}
          style={{
            marginBottom: 15,
            padding: 20,
            borderColor: colorArray[index],
            borderWidth: 5,
            borderRadius: 12,
          }}
        >
          <Text style={{fontSize: 20}}>
            {index + 1}: {question.question}
          </Text>
          <View style={styles.option}>
            <Text style={optionColor(index, question.optionone).label}>A</Text>
            <Text style={optionColor(index, question.optionone).text}>
              {question.optionone}
            </Text>
          </View>
          <View style={styles.option}>
            <Text style={optionColor(index, question.optiontwo).label}>B</Text>
            <Text style={optionColor(index, question.optiontwo).text}>
              {question.optiontwo}
            </Text>
          </View>
          <View style={styles.option}>
            <Text style={optionColor(index, question.optionthree).label}>
              C
            </Text>
            <Text style={optionColor(index, question.optionthree).text}>
              {question.optionthree}
            </Text>
          </View>
          <View style={styles.option}>
            <Text style={optionColor(index, question.optionfour).label}>D</Text>
            <Text style={optionColor(index, question.optionfour).text}>
              {question.optionfour}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  optionIndex: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 3,
    marginRight: 10,
  },
  option: {
    flexDirection: 'row',
    marginVertical: 5,
  },
});

export default ViewScriptComponent;
