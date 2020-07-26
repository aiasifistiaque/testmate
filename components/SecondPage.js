import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from '../actions';

const SecondPage = navigation => {
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(0);
  const count = useSelector(state => state.counter);
  return (
    <View style={styles.container}>
      <Text>This is the second page!</Text>
      <Text>Counter is: {counter}</Text>
      <Text>Count is: {count}</Text>
      <Text style={{marginTop: 10}}>counter</Text>
      <View style={{flexDirection: 'row', marginVertical: 5}}>
        <Button title="+" onPress={() => setCounter(counter + 1)} />
        <Button title="-" onPress={() => setCounter(counter - 1)} />
      </View>
      <Text style={{marginTop: 10}}>count from redux</Text>
      <View style={{flexDirection: 'row', marginVertical: 5}}>
        <Button title="+" onPress={() => dispatch(increment(2))} />
        <Button title="-" onPress={() => dispatch(decrement(2))} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SecondPage;
