import React from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

const placeInput = props => {
  const { placeName, inputChanged, buttonPressed } = props;
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.placeInput}
        placeholder="An awesome place"
        value={placeName}
        onChangeText={inputChanged}
      />
      <Button
        title="Add"
        style={styles.placeButton}
        onPress={buttonPressed}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  }
});

export default placeInput;