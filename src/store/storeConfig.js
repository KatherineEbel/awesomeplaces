import { createStore, combineReducers } from 'redux';
import placesReducer from './reducers/places';

const rootReducer = combineReducers({
  places: placesReducer
});

export const storeConfig = () => {
  return createStore(rootReducer);
};