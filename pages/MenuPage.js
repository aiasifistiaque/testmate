import React from 'react';
import {View, FlatList, Text} from 'react-native';
import styles from '../Style/MenuPageStyle';
import DATA from '../data/MenuPageData';
import MenuPageItems from '../components/MenuPageItems';

const header = () => {
  return (
    <View>
      <Text style={styles.headerText}>Menu</Text>
    </View>
  );
};

const MenuPage = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListHeaderComponent={header}
        ListHeaderComponentStyle={styles.header}
        renderItem={({item}) => (
          <MenuPageItems title={item.title} logo={item.icon} />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default MenuPage;
