import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {direction} from '../Style';

const AllQuestions = props => {
  console.log(props);
  const [index, setIndex] = useState(0);
  const indexPlus = initialIndex => {
    setIndex(initialIndex + 1);
    return index;
  };

  return (
    <View>
      {props.questions.map(question => (
        <View key={question._id} style={{marginHorizontal: 10}}>
          <View style={direction.row}>
            <Text>{indexPlus(index)}: </Text>
            <Text>{question.question}</Text>
          </View>

          <View style={direction.row}>
            <View style={direction.column}>
              <Text>A: {question.optionone}</Text>
              <Text>B: {question.optiontwo}</Text>
            </View>
            <View style={direction.row}>
              <Text>C: {question.optionthree}</Text>
              <Text>D: {question.optionfour}</Text>
            </View>
          </View>
        </View>
      ))}
      ;
    </View>
  );
};

export default AllQuestions;
