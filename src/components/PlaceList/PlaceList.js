import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ListItem from '../ListItem/ListItem';

const placeList = props => {
  let { places, itemPressed } = props;
  return (
    <FlatList 
      style={styles.listContainer}
      data={places}
      keyExtractor={place => place.key.toString()}
      renderItem={({item}) => (
        <ListItem
          placeName={item.name}
          placeImage={item.image}
          pressed={() => itemPressed(item.key)}/>
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: { width: '100%'}
});

export default placeList;