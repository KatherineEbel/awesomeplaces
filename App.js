import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

type Props = {};
export default class App extends Component<Props> {
  state = {
    placeName: '',
    places: [],
    selectedPlace: null
  };
  
  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          place={this.state.selectedPlace}
          closed={this.modalClosedHandler}
          itemDeleted={this.placeDeletedHandler}
        />
        <PlaceInput
          placeName={this.state.placeName}
          inputChanged={this.placeNameChangedHandler}
          buttonPressed={this.placeAddedHandler.bind(this, this.state.placeName)}
        />
        <PlaceList places={this.state.places} itemPressed={this.onItemPressedHandler}/>
      </View>
    );
  }
  
  modalClosedHandler = () => {
    this.setState({selectedPlace: null})
  };
  
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
          image: {
            uri: 'https://images.pexels.com/photos/54610/sydney-opera-house-australia-54610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          }
        })
      };
    });
  };
  
  placeDeletedHandler = () => {
    this.setState(prevState => {
      const places = prevState.places
                              .filter(place => place.key !== prevState.selectedPlace.key);
      return {
        places,
        selectedPlace: null
      }
    });
  };
  
  onItemPressedHandler = key => {
    this.setState({selectedPlace: this.state.places.find(p => p.key === key)})
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
