import counterReducer from './counter';
import practiceScoreReducer from './practiceScore';
import {combineReducers} from 'redux';
import HostReducer from './hostReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers ({
  counter: counterReducer,
  host: HostReducer,
  practiceScore: practiceScoreReducer,
  auth: authReducer,

  //isLogged: isLoggedReducer,
  //life: lifeReducer,
});

export default rootReducer;
