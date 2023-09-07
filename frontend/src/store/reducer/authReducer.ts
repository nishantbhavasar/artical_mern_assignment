// authReducer.js
import * as actionTypes from '../actionTypes/authActionTypes';
const initialState = {
  data: null,
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA_REQUEST:
      return { ...state, loading: true };
    case actionTypes.FETCH_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload, error: null };
    case actionTypes.FETCH_DATA_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default authReducer;
