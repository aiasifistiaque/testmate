import React from 'react';
import {Text, View, Button} from 'react-native';
import {useSelector} from 'react-redux';
import {MainContainer} from '../Style';

const Home = ({navigation}) => {
  const count = useSelector(state => state.counter);
  const host = useSelector(state => state.host);
  return (
    <View style={MainContainer.container}>
      <Text>Home Screen!</Text>
      <Text>Counter is: {count}</Text>
      <Text>Host is: {host}</Text>
      <Button
        title="Go to the second page"
        onPress={() => navigation.navigate({name: 'Second'})}
      />
      <Button
        title="Go to the app page"
        onPress={() => navigation.navigate({name: 'ACEHome'})}
      />
    </View>
  );
};

export default Home;
