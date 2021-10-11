import { combineReducers } from 'redux';

import { beerReducer } from '../modules/content/reducers';

export const rootReducer = combineReducers({beerReducer});
