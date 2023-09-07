import { combineReducers } from 'redux';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  authReducer,
  // Add more reducers here as needed
});

export default rootReducer;