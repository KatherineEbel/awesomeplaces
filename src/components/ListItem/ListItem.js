import React from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const listItem = props => {
  return (
  <TouchableOpacity onPress={props.pressed}>
    <View style={styles.listItem}>
      <Image resizeMode="cover" style={styles.placeImage} source={props.placeImage}/>
      <Text>{props.placeName}</Text>
    </View>
  </TouchableOpacity>)
};

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 10,
    margin: 5,
    backgroundColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center'
  },
  placeImage: {
    marginRight: 8,
    height: 30,
    width: 30
  }
});

export default listItem;