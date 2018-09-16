import React, {Component} from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import {
  addPlace,
  deletePlace,
  selectPlace,
  deselectPlace
} from './src/store/actions'

type Props = {};
class App extends Component<Props> {
  state = {
    placeName: '',
  };
  
  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          place={this.props.selectedPlace}
          closed={this.modalClosedHandler}
          itemDeleted={this.placeDeletedHandler}
        />
        <PlaceInput
          placeName={this.state.placeName}
          inputChanged={this.placeNameChangedHandler}
          buttonPressed={this.placeAddedHandler.bind(this, this.state.placeName)}
        />
        <PlaceList places={this.props.places} itemPressed={this.placeSelectedHandler}/>
      </View>
    );
  }
  
  modalClosedHandler = () => {
    this.props.onDeselectPlace()
  };
  
  placeNameChangedHandler = val => {
    this.setState({placeName: val})
  };
  
  placeAddedHandler = placeName => {
    if (placeName.trim() === '') {
      return;
    }
    this.props.onAddPlace(placeName);
  };
  
  placeDeletedHandler = () => {
    this.props.onDeletePlace()
  };
  
  placeSelectedHandler = key => {
    this.props.onSelectPlace(key)
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

const mapStateToProps = state => ({
  selectedPlace: state.places.selectedPlace,
  places: state.places.places
});

const mapDispatchToProps = dispatch => ({
  onAddPlace: name => dispatch(addPlace(name)),
  onDeletePlace: () => dispatch(deletePlace()),
  onSelectPlace: key => dispatch(selectPlace(key)),
  onDeselectPlace: () => dispatch(deselectPlace())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);