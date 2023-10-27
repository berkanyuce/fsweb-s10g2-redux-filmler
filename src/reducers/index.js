import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favoritesReducer from "./favoritesReducer"

const rootReducers = combineReducers({
    movieReducer,
    favoritesReducer,
});


export default rootReducers;