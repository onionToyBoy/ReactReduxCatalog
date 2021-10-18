import { combineReducers } from 'redux';

import { headerReducer } from './header/reducers';
import { beerReducer } from './beers/reducers';

export const rootReducer = combineReducers({ beerReducer, headerReducer });
