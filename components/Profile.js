import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {Button as NbButton, Icon} from 'native-base';
import styles from '../Style/ProfileStyle';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import BottomContainer from './ProfileBottomContainer';

const SecondBottomConteiner = props => {
  return (
    <View style={stl.container}>
      <View style={stl.views}>
        <Text style={stl.text}>Profile</Text>
        <Text style={stl.subText}>
          Some info may be visible to other people using ACE services. Learm
          more
        </Text>
      </View>
      <View style={stl.views}>
        <Text style={stl.text}>Photo</Text>
        <Text style={stl.subText}>Add a photo to personalize your account</Text>
      </View>
      <View style={stl.views}>
        <Text style={stl.text}>Name</Text>
        <Text style={stl.subText}>
          {props.auth.user.firstname} {props.auth.user.lastname}
        </Text>
      </View>
      <View style={stl.views}>
        <Text style={stl.text}>Email</Text>
        <Text style={stl.subText}>{props.auth.user.email}</Text>
      </View>
      <View style={stl.views}>
        <Text style={stl.text}>Phone</Text>
        <Text style={stl.subText}>01828398225</Text>
      </View>
    </View>
  );
};

const txtColor = 'gray';

const stl = StyleSheet.create({
  container: {
    margin: 10,
    padding: 20,
    borderColor: 'lavender',
    borderWidth: 1,
    borderRadius: 5,
    flex: 1,
  },
  views: {
    borderBottomWidth: 1,
    borderColor: 'lavender',
    paddingBottom: 15,
    marginBottom: 10,
  },
  text: {fontSize: 18, marginVertical: 10},
  subText: {
    color: txtColor,
  },
});

const Profile = () => {
  const navigation = useNavigation();
  const auth = useSelector(state => state.auth);
  const user = auth.user;
  const isLogged = auth.loggedIn;

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <NbButton transparent style={styles.headerRight}>
          <Text style={styles.headerIcon}>Edit</Text>
        </NbButton>
      ),
    });
  }, []);

  return isLogged ? (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.picContainer}>
          <Text style={styles.picText}>{user.firstname[0]}</Text>
          <Text style={styles.picText}>{user.lastname[0]}</Text>
        </View>
        <Text style={styles.userName}>
          {user.firstname} {user.lastname}
        </Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>
      <ScrollView style={{flex: 1, width: '100%'}}>
        <SecondBottomConteiner auth={auth} />
      </ScrollView>
    </View>
  ) : (
    <View>
      <Text>not logged in </Text>
    </View>
  );
};

export default Profile;
