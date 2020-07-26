import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {MainContainer} from '../Style';
import {Button as NbButton, Icon} from 'native-base';
import ViewScriptComponent from './ViewScriptComponent';

const ResultComponent = ({route, navigation}) => {
  const {answer} = route.params;
  const {questions} = route.params;
  const [correct, setCorrect] = useState(0);
  const [total, setTotal] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [skipped, setSkipped] = useState(0);

  useEffect(() => {
    console.log('use effect hook is here');
    console.log(navigation.dangerouslyGetState());
    setTotal(questions.length);

    console.log('next');

    let index = 0;
    let bhul = 0;
    let corr = 0;
    let skip = 0;

    for (index = 0; index < questions.length; index = index + 1) {
      if (answer[index] != null) {
        if (questions[index].answer == answer[index]) {
          corr = corr + 1;
        } else {
          bhul = bhul + 1;
        }
      } else {
        skip = skip + 1;
      }
    }

    setCorrect(corr);
    setSkipped(skip);
    setWrong(bhul);
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Icon
          name="ios-close"
          style={{fontSize: 25, marginLeft: 15, color: 'gray'}}
          onPress={() => navigation.navigate('Home')}
        />
      ),
    });
  }, []);

  return (
    <View style={MainContainer.container}>
      <View style={{borderColor: 'black', padding: 20}}>
        <Text>
          Score: {correct}/{total}
        </Text>
        <Text>skipped: {skipped}</Text>
        <Text>wrong: {wrong}</Text>
      </View>
      <NbButton
        block
        style={{margin: 20}}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={{color: 'white'}}>back home</Text>
      </NbButton>
      <ScrollView>
        <ViewScriptComponent questions={questions} answer={answer} />
      </ScrollView>
    </View>
  );
};

export default ResultComponent;
