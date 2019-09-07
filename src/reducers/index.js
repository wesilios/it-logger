import { combineReducers } from 'redux';
import logReducer from './logReducer';
import textReducer from './techReducer';

export default combineReducers({
  log: logReducer,
  tech: textReducer
});
