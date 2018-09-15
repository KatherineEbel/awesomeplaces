import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ListItem from '../ListItem/ListItem';

const placeList = props => {
  let { places, itemPressed } = props;
  return (
    <FlatList 
      style={styles.listContainer}
      data={places}
      renderItem={(place) => <ListItem placeName={place.value} pressed={() => itemPressed(i)}/>}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: { width: '100%'}
});

export default placeList;