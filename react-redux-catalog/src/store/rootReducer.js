import { combineReducers } from 'redux';

import { beerReducer } from '../modules/ContentModule/reducers';

export const rootReducer = combineReducers({beerReducer});
