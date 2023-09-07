// apiActions.js
import apiService from '../apis/authService';
import * as actionTypes from '../actionTypes/authActionTypes';

export const fetchData = () => async (dispatch:any) => {
  dispatch({ type: actionTypes.FETCH_DATA_REQUEST });

  try {
    const data = await apiService.fetchData(); // Call your API here
    dispatch({
      type: actionTypes.FETCH_DATA_SUCCESS,
      payload: data,
    });
  } catch (error:any) {
    dispatch({
      type: actionTypes.FETCH_DATA_FAILURE,
      error: error.message,
    });
  }
};
