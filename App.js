/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import placeImage from './src/assets/sydneyaustralia.jpg';

type Props = {};
export default class App extends Component<Props> {
  state = {
    placeName: '',
    places: []
  };
  
  render() {
    return (
      <View style={styles.container}>
        <PlaceInput
          placeName={this.state.placeName}
          inputChanged={this.placeNameChangedHandler}
          buttonPressed={this.placeAddedHandler.bind(this, this.state.placeName)}
        />
        <PlaceList places={this.state.places} itemPressed={this.onItemPressedHandler}/>
      </View>
    );
  }
  
  placeNameChangedHandler = val => {
    this.setState({placeName: val})
  };
  
  placeAddedHandler = placeName => {
    if (placeName.trim() === '') {
      return;
    }
    this.setState(prev => {
      return {
        places: prev.places.concat({
          key: Math.random(),
          name: placeName,
          image: placeImage
        })
      };
    });
  };
  
  onItemPressedHandler = key => {
    const places = this.state.places.filter(place => place.key !== key);
    this.setState({places});
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#FFF',
  }
});
