import { apiCall } from '../utils/api';

export const GET_GOALS_REQUEST = 'GET_GOALS_REQUEST';
export const GET_GOALS_SUCCESS = 'GET_GOALS_SUCCESS';
export const GET_GOALS_FAILURE = 'GET_GOALS_FAILURE';

export function getGoals() {
  return dispatch => {
    dispatch(getGoalsRequest());

    apiCall('get', 'goals')
      .then(response => {
        console.log(response);

        dispatch(getGoalsSuccess(response.data));
      })
      .catch(error => {
        throw error;
        console.log(error.message);
        dispatch(getGoalsFailure(error.message));
      })
  }
}

function getGoalsRequest() {
  return {
    type: GET_GOALS_REQUEST,
    isLoading: true,
  }
}

function getGoalsSuccess(data) {
  return {
    type: GET_GOALS_SUCCESS,
    data: data,
    isLoading: false,
  }
}

function getGoalsFailure(error) {
  return {
    type: GET_GOALS_FAILURE,
    isLoading: false,
    error: error,
  }
}
