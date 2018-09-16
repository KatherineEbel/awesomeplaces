import React from 'react';
import { Button, Modal, Image, StyleSheet, Text, View } from 'react-native';

const placeDetail = ({place, closed, itemDeleted}) => {
  let jsx = null;
  if (place) {
    jsx = (
      <View>
        <Image style={styles.placeImage} source={place.image}/>
        <Text style={styles.placeName}>{place.name}</Text>
      </View>
    )
  }
  return (
    <Modal
      onRequestClose={closed}
      animationType="slide"
      visible={place !== null}>
      <View style={styles.modalContainer}>
        {jsx}
        <View>
          <Button
            color="red"
            title="Delete" onPress={itemDeleted}/>
          <Button title="Close" onPress={closed}/>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22
  },
  placeImage: {
    width: '100%',
    height: 200
  },
  placeName: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 28,
    marginTop: 5,
    marginBottom: 5
  }
});

export default placeDetail;