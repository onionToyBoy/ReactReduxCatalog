import { combineReducers } from 'redux';

import { beerReducer } from '../modules/content/reducers';
import { headerReducer } from '../modules/header/reducers';

export const rootReducer = combineReducers({ beerReducer, headerReducer });
