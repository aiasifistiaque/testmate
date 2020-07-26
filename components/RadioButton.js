import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {RadioButton as Radio} from 'react-native-paper';

const RadioButton = () => {
  const [bol, setBol] = useState(false);
  const [radioValue, setRadioValue] = useState([]);
  const changeArrayValue = (index, value) => {
    let newArray = [...radioValue];
    newArray[index] = value;
    setRadioValue(newArray);
  };
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Radio.Group
        onValueChange={value => {
          let newArray = [...radioValue];
          newArray[0] = value;
          setRadioValue(newArray);
          console.log(radioValue);
        }}
        value={radioValue[0]}
      >
        <View style={{flexDirection: 'row'}}>
          <Radio value="first" />
          <Text>First</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Radio value="second" />
          <Text>Second</Text>
        </View>
      </Radio.Group>
      <Text>Radio value is: {radioValue[0]}</Text>
      <Radio.Group
        onValueChange={value => changeArrayValue(1, value)}
        value={radioValue[1]}
      >
        <View style={{flexDirection: 'row'}}>
          <Radio value="third" />
          <Text>Third</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Radio value="forth" />
          <Text>Forth</Text>
        </View>
      </Radio.Group>
      <Text>Radio value is: {radioValue[1]}</Text>
    </View>
  );
};

export default RadioButton;
